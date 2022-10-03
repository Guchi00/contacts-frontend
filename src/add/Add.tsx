import React, { ReactEventHandler, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsSearch } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { SingleContactProps } from '../singlecontact/SingleContact';

import * as S from "./styles";

export type AddProps = {
    func: (data: SingleContactProps) => void;
};

const INITIAL_STATE: {
    name: string;
    mobile: string;
    home: string;
    gender: string;
    image?: File;
    age: number;
    occupation: string;
} = {
    name: "",
    mobile: "",
    home: "",
    gender: "",
    image: undefined,
    age: 0,
    occupation: ""
}

export const Add = ({ func }: AddProps) => {
    const [show, setShow] = useState(false);
    const [addNewContact, setAddNewContact] = useState(INITIAL_STATE);
    const [error, setError] = useState("");

    const parseImage = (image: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result as string);
            };

            reader.onerror = () => {
                reject(new Error('Error reading image file'));
            };

            reader.readAsDataURL(image);
        });
    };

    const handleClose = () => {
        setShow(false);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e, 'event >>>>')

        try {
            console.log(addNewContact, 'add neew')
            if (!addNewContact.name || !addNewContact.mobile || !addNewContact.home ||
            !addNewContact.gender || !addNewContact.image)
            return setError("These fields are required")
            setError("");

            const imageBase64 = await parseImage(addNewContact.image);

            const array = [addNewContact.mobile, addNewContact.home];

            const response = await fetch("http://localhost:8000/api/v1/contacts/", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: addNewContact.name,
                    phoneNumbers: array,
                    gender: addNewContact.gender,
                    image: imageBase64,
                    age: addNewContact.age,
                    occupation: addNewContact.occupation
                })
            });
            if (response.status !== 201) {
                console.log
            }
            const content = await response.json();
            console.log(content);

            // setAddNewContact(INITIAL_STATE);
            // handleClose();
            func(content);
        } catch (error) {
            console.log(error, 'error')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const { name, value, files } = e.target;
        const formValue = name === 'image' ? files?.[0] : value;
        console.log(e.target.files, 'files')
        setAddNewContact((input) => ({...input, [name]:  formValue}))
    }

    const handleShow = () => {
        setShow(true);
    }


  return (
    <>
        <S.Container>
            <S.icon>
                <BsSearch />
            </S.icon>
            <S.Input type="text" placeholder="Search"></S.Input>

            <S.AddContactsBnt type="button" onClick={handleShow}>
                <FaUserPlus />
            </S.AddContactsBnt>
        </S.Container>
        
        <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
            <Modal.Title>New Contact</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
            <S.Form action="POST" onSubmit={handleSubmit}>
            <S.ImageInputDiv>
            <S.ImageInput type="file" accept="image/*" name="image" placeholder="Image" onChange={handleChange}/>
            </S.ImageInputDiv>
            <S.Inputs type="text" name="name" placeholder="Name" onChange={handleChange} value={addNewContact.name}/>
            <S.Inputs type="text" name="mobile" placeholder="Mobile" onChange={handleChange} value={addNewContact.mobile}/>
            <S.Inputs type="text" name="home" placeholder="Home" onChange={handleChange} value={addNewContact.home}/>
            <S.Inputs type="text" name="gender" placeholder="Gender" onChange={handleChange} value={addNewContact.gender}/>
            <S.Inputs type="number" name="age" placeholder="Age" onChange={handleChange} value={addNewContact.age}/>
            <S.Inputs type="text" name="occupation" placeholder="Occupation" onChange={handleChange} value={addNewContact.occupation}/>
            {/* <input type="submit" value="Submit" /> */}
            <S.SaveAndCloseDiv>
            <S.Save type="submit">
                Save
            </S.Save>

            <S.Close onClick={handleClose}>
                Close
            </S.Close>
            </S.SaveAndCloseDiv>

            
        
            </S.Form>

            </Modal.Body>

            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    </>
  );
}

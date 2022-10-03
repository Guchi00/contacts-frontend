import React, { useEffect, useState } from 'react';
import { Add } from "../add/Add";
import { SingleContact } from '../singlecontact/SingleContact';

import * as S from './styles';

// const data: SingleContactProps[] = [
//     {
//         image: "img",
//         title: "Jocy",
//         value: "08062593450",
//         gender: "female",
//         age: 24,
//         occupation: "Backend Engineer",
//         backgroundColor: "#e3f49a"
//     },
//     {
//         image: "img",
//         title: "Ugochi",
//         value: "08166948572",
//         gender: "female",
//         age: 24,
//         occupation: "Full-Stack Engineer",
//         backgroundColor: "#daeaf0"  
//     },
//     {
//         image: "img",
//         title: "Ugochi",
//         value: "08166948572",
//         gender: "female",
//         age: 24,
//         occupation: "Full-Stack Engineer",
//         backgroundColor: "#dcd2ee" 
//     },
//     {
//         image: "img",
//         title: "Ugochi",
//         value: "08166948572",
//         gender: "female",
//         age: 24,
//         occupation: "Full-Stack Engineer",
//         backgroundColor: "#dcd2ee" 
//     }
// ];


type Contact = {
    name: string;
    phoneNumbers: string[];
    gender: string;
    image: string;
    age: number;
    occupation: string;
}

export const AllContacts = () => {
    const [contacts, setContacts] = useState<Contact[] | null>(null);


    useEffect(() => {
        console.log('her >>>>>>>>')
        async function fetchData() {
            const res = await fetch("http://localhost:8000/api/v1/contacts/"); //using a get method here
            console.log(res, 'res >>>>>>')
            const data = await res.json();
            console.log(data, 'data >>>>>>')
            setContacts(data);
        }
        fetchData();
    }, [])

    const addContactFunc = (contact: Contact) => {
        setContacts(existingContacts => {
            if (existingContacts) return [contact, ...existingContacts];
            return [contact];
        });
    }

  if (contacts === null) return <S.Wrapper><p>Loading</p></S.Wrapper>

  return (
    <S.Wrapper>
        <Add func={addContactFunc}
        />
        <S.ContactsDiv>
        {contacts.map((item) => 
        <SingleContact key={item.name} image={item.image} 
        name={item.name} phoneNumbers={item.phoneNumbers} gender={item.gender} 
        age={item.age} occupation={item.occupation}
        />
        )}
        </S.ContactsDiv>
       
    </S.Wrapper>
  )
}

// {contacts.map((item) => <p>{JSON.stringify(item)}</p>)}
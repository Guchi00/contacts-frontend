import Item from 'antd/lib/list/Item';
import React from 'react'

import * as S from "./styles";

export type SingleContactProps = {
    image: string;
    name: string;
    phoneNumbers: string[];
    gender: string;
    age: number;
    occupation: string;
    // backgroundColor: string;
}

const phoneTitles: Record<string, string> = {
  0: 'mobile',
  1: 'home',
  2: 'office',
};

export const SingleContact = ({ image, name, phoneNumbers, gender, age, occupation }: SingleContactProps) => {
  const getPhoneTitle = (index: string) => {
    return phoneTitles[index];
  };

  return (
    <S.Card>
        <S.ImageAndNameDiv>
            <S.Image src={image} />
            <S.Name>{name}</S.Name>
        </S.ImageAndNameDiv>
        
        <S.MobilesDiv>
          {/* <S.MobilePhoneNumber>mobile</S.MobilePhoneNumber> */}
          {phoneNumbers.map((item, i) => 
          <S.Mobile key={item}
          >{getPhoneTitle(`${i}`)}: {item}</S.Mobile>
          )}
          
        </S.MobilesDiv>

        <S.List>
          <S.ListLabels>Gender:</S.ListLabels>
          <S.ListItems>{gender}</S.ListItems>
        </S.List>
        <S.List>
          <S.ListLabels>Age:</S.ListLabels>
          <S.ListItems>{age}</S.ListItems>
        </S.List>
        <S.List>
          <S.ListLabels>Occupation:</S.ListLabels>
          <S.ListItems>{occupation}</S.ListItems>
        </S.List>
    </S.Card>
  )
}
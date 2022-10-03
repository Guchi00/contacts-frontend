import React from 'react'


import * as S from "./styles"

export function RightItems() {
  return (
    <>
    <S.Items>Favourites</S.Items>
    <S.Items>Recents</S.Items>
    <S.Contact to="/">Contacts</S.Contact>
    <S.Items>KeyPad</S.Items>
    <S.Items>Voicemail</S.Items>
    </>
  )
}

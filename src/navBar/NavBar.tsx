import React from 'react'
import { RightItems } from '../rightitems/RightItems';

import * as S from "./styles";

export function NavBar() {
  return (
    <S.Holder>
      <S.Left></S.Left>
      <S.Right>
        <RightItems />
      </S.Right>
    </S.Holder>
  )
}


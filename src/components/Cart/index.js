import React from 'react';
import { CartArea, CartHeader, CartIcon, CartBody, CartText } from './styled';

export default () => {
  return(
    <CartArea>
      <CartHeader>
        <CartIcon src='/assets/Devsfood_img/cart.png' />
        <CartText>Menu Carrinho (X)</CartText>
      </CartHeader>
      <CartBody>
          
      </CartBody>
    </CartArea>
  )
}
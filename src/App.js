import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Container, Menu, PageBody } from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import PrivateRoute from './components/PrivateRoute';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart'

export default () => {
  const name = useSelector(state => state.user.name);

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem icon="/assets/Devsfood_img/store.png" link="/" />
          <MenuItem icon="/assets/Devsfood_img/order.png" link="/orders" />
          <MenuItem icon="/assets/Devsfood_img/profile.png" link="/profile" />
        </Menu>
          <PageBody>
            <Switch>
                <Route exact path="/">
                  <HomeScreen />
                </Route>
                <PrivateRoute path="/orders">
                  <div>Tela de Pedidos</div>
                </PrivateRoute>
                <PrivateRoute path="/profile">
                  <div>Tela de Perfil</div>
                </PrivateRoute>
                <Route path="/tela2/:nome">
                  <Tela2Screen />
                </Route>
            </Switch>
          </PageBody>
          <Cart />
      </Container>
    </BrowserRouter>
  );
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../shopping-purse-icon.svg";
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} width="50" alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-cart-plus">My Cart</i>
            </span>
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}



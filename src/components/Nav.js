import React from "react";

// animation
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../img/logo.svg";

const Nav = () => {
    return (
        <StyledNav>
            <Logo>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <div className="search">
                <input type="text" />
                <button>Search</button>
            </div>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
    text-align: center;
    padding: 3rem 5rem;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: orange;
        color: white;
    }
`;
const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        width: 2rem;
        height: 2rem;
    }
`;

export default Nav;

import React from "react";
// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
    const stringGameId = id.toString();
    // load details handler
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    };
    return (
        <StyledGame
            variants={popup}
            initial="hidden"
            animate="show"
            layoutId={stringGameId}
            onClick={loadDetailHandler}
        >
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringGameId}`}>{name}</motion.h3>
                <motion.p layoutId={`description ${stringGameId}`}>
                    {released}
                </motion.p>
                <motion.img
                    layoutId={`image ${stringGameId}`}
                    src={smallImage(image, 640)}
                    alt={name}
                />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;

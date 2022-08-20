import React from "react";
import { Button, Link } from '@mui/material';

import RoomInfo from "./RoomInfo";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import RoomMain from "./RoomMain";
const GameContainer = ({ socket, room_info }) => {
    const navigate = useNavigate();
    /*
    room_info:
    map: "hello"
    player: Array(2)
    0: (2) ['GG6OQ4FWXKjAH2SfAAAD', 0]
    1: (2) ['wE3Cf2G6qZx9AtQjAAAH', 0]
    length: 2
    [[Prototype]]: Array(0)
    room_id: "16e4abf2"
    room_status: "waiting"
    */

    const exitRoom = () => socket.emit("exit_room");
    const startroom = () => {
        navigate("/game/start");
    };

    return (
        <div>
            <Button variant="contained" onClick={exitRoom}>되돌아가기</Button>
            <Button variant="contained" onClick={startroom}>시작하기</Button>

        </div>
    );

};

export default GameContainer;
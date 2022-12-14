import React from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import RoomMain from "./RoomMain";

import { Button, Link, Paper } from '@mui/material';

import RoomInfo from "./RoomInfo";
import "./gamecont.scss";

const GameContainer = ({ socket, room_info }) => {
    const navigate = useNavigate();
    /*
    room_info:
    map: "hello"
    player: Array(2)
    0: (2) ['GG6OQ4FWXKjAH2SfAAAD', 0]  // -> [socket.id, ready상태] -> 0 : 준비 X / 1 : 준비 O
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
        <div className="exitRoom">
            <Button variant="contained" onClick={startroom}>시작하기</Button>
            <Paper elevation={3} className="paper" justifyContent="center"> 
                <Button variant="contained" onClick={exitRoom}>되돌아가기</Button>
                <Paper>
                    <RoomInfo socket={socket} {...room_info}/>
                </Paper>
            </Paper>            

        </div>
    );

};

export default GameContainer;
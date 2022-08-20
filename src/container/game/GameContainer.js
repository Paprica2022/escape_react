import React from "react";

import RoomInfo from "./RoomInfo";

const GameContainer = ({ socket, room_info }) => {

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

    // const joinAI = () => socket.emit("join_ai");

    return (
        <div>
            hello world
            {/* <RoomInfo socket={socket} {...room_info}/> */}
        </div>
    );

};

export default GameContainer;
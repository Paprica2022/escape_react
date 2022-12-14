import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation, Link } from "react-router-dom";
import io from "socket.io-client";
import { Button, Grid, LinearProgress } from "@mui/material";

import GameContainer from "../container/game/GameContainer";
import RoomContainer from "../container/room/RoomContainer";
import RoomMain from "../container/game/RoomMain";
import GameInfo from "../container/game/GameInfo";
import { API_URL } from "../_variables.js";

console.log(API_URL);

const socket = io.connect(API_URL, {
    cors: { origin: '*' }
});

function Router() {
    const navigate = useNavigate();
    const location = useLocation();

    const [room_list, setRoomList] = useState([]);


    ///////////////info////////////////
    const [info, setInfo] = useState({
        room_info: { room_id: "", room_status: "", player: [] },
    });
    const [gameinfo, setGameInfo] = useState({
      game_info : { room_id : "", player :  [], location : []}
    });
    ///////////////info////////////////

    useEffect(() => {
        // if (location.pathname.startsWith("/game/")) {
        //   let room_id = location.pathname.replaceAll("/game/", "");
        //   socket.emit("join_room", { room_id });
        // }
        socket.on("command", (info) => {
          console.log("Server From Client : ", info);
          switch (info.command) {
            case "update_room":
              setRoomList(info.room_list.reverse());
              navigate("/room");
              break;
            case "room_info":
              setInfo({ room_info: info.room_info });
              navigate(`/ready/${info.room_info.room_id}`);
              break;
            case "game_info":
              setInfo({ game_info: info.game_info });
              navigate(`/game/${info.game_info.room_id}`);
              break;
            default:
              console.log("command not found", info.command);
          }
        });// eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <Grid container alignItems="center">
            <Routes>
                <Route
                    path="/*"
                    element={<RoomContainer socket={socket} room_list={room_list} />}
                />
                <Route
                    path="/ready/*"
                    element={<GameContainer socket={socket} {...info} />}
                />
                <Route
                    path="/game/*"
                    element={<GameInfo socket={socket} {...info} />}
                    // path="/game/start"
                    // element={<RoomMain />}
                />
            </Routes>
        </Grid>
    );

}


export default Router;





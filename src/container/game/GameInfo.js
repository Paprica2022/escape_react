import React, { useEffect, useState } from "react";

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import RoomMain from "./RoomMain";
import "./RoomMain.scss"
import { Socket } from "socket.io-client";

const GameInfo = ({ socket, game_info }) => {
    
    // const renderPlayers = () => {
    //     var player = game_info.player;
    //     // var location = game_info.location;
    //     var location = [['translate('+650+'px, '+540+'px)']];
    //     // return (tbody(
    //     //     for (let i = 0; i < numrows; i++) {
    //     //         ObjectRow()
    //     //     } 
    //     // ))
        
        
    //     console.log(player);
    //     console.log(location);
    // }

    // const playerList = player.map(function(player, i) => (<img className="my_paprica" style= {transform : 'translate('+location[i][0]+'px, '+location[i][1]+'px)'} alt="y_paprica_img" src={`${process.env.PUBLIC_URL}/asset/Yellow Paprica gif/front-walk.gif`}></img>));
    
    var [lrindex, setNumber] = useState(0)
    var [udindex, setNum] = useState(0)
    const goLeft = () => {
        socket.emit("move",{direction:"left"});
    };

    const goRight = () => {
        // setNumber(lrindex+50);
        // console.log("rigth lrindex",lrindex)
        socket.emit("move",{direction:"right"});
    };

    const goUp = () => {
        // setNum(udindex-50);
        // console.log("udindex",udindex)
        socket.emit("move",{direction:"up"});
    };

    const goDown = () => {
        // setNum(udindex+50);
        // console.log("dd udindex" ,udindex)
        socket.emit("move",{direction:"down"});
    };

    var ctrans = `translate(${game_info.location[0]}px, -${game_info.location[1]}px)`
    var css = {
        transform : ctrans
    }

    // TODO
    // useeffect -> 렌더링할 때 실행되게 해야한다 gameinfo 정보가 왔을 때
    // 각 플레이어 캐릭터 마다 객체를 생성 -> 각 객체마다 css 파일을 다르게 해야함

    return (
        <div>
            <RoomMain />
            <div>
                <img className="my_paprica" style= {css} 
                alt="y_paprica_img" src={`${process.env.PUBLIC_URL}/asset/Yellow Paprica gif/front-walk.gif`}></img>
            </div>

            <div className="joystick">
                <ArrowCircleLeftIcon onClick={goLeft} />
                <ArrowCircleRightIcon onClick={goRight} />
                <ArrowCircleUpIcon onClick={goUp}/>
                <ArrowCircleDownIcon onClick={goDown}/>
            </div>
        </div>
    );
    
};

export default GameInfo;
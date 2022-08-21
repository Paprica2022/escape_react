import React, { useEffect, useState } from "react";

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import RoomMain from "./RoomMain";
import "./RoomMain.scss"

const GameInfo = ({ socket, room_id, player, turn}) => {


    var [lrindex, setNumber] = useState(0)
    var [udindex, setNum] = useState(0)
    const goLeft = () => {
        setNumber(lrindex-50);
        console.log("left lrindex", lrindex)
    };

    const goRight = () => {
        setNumber(lrindex+50);
        console.log("rigth lrindex",lrindex)

    };

    const goUp = () => {
        setNum(udindex-50);
        console.log("udindex",udindex)

    };

    const goDown = () => {
        setNum(udindex+50);
        console.log("dd udindex" ,udindex)

    };

    var ctrans = 'translate('+lrindex+'px, '+udindex+'px)'
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
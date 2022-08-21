import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import styles from "./RoomMain.scss"

// 맵을 띄우는 파일

export default function RoomMain(){
    const widthSize = 1500;
    const heightSize = 800;

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

    return(
        <div className="roomMain">
            <div className="background">
                <img className="background_img" style={{
                    height : heightSize,
                    width : widthSize,
                }}
                alt="school_img" src={`${process.env.PUBLIC_URL}/asset/background.png`}/>

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
    )
};
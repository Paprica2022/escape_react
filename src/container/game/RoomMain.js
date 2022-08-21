import React, { useState } from "react";
import { Button, Box } from "@mui/material";


import styles from "./RoomMain.scss"


// 맵을 띄우는 파일
export default function RoomMain(){

    const widthSize = 1500;
    const heightSize = 800;

    return(
        <div className="roomMain">
            <div className="background">
                <img className="background_img" style={{
                    height : heightSize,
                    width : widthSize,
                }}
                alt="school_img" src={`${process.env.PUBLIC_URL}/asset/background.png`}/>

            </div>

        </div>
    )
};
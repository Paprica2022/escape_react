import React from "react";
import { Button, Box } from "@mui/material";

import "./RoomMain.scss"

// 맵을 띄우는 파일

export default function RoomMain(){
    return(
        <div className="roomMain">
            <div className="background">
                <img className="background_img" alt="school_img" src={`${process.env.PUBLIC_URL}/asset/background.png`}></img>
            </div>
        </div>
    )
};
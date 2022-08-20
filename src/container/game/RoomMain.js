import React from "react";
import { Button, Box } from "@mui/material";

import "./RoomMain.scss"



export default function RoomMain(){
    return(
        <div className="roomMain">
            <div className="background">
                <img className="background_img" alt="school_img" src={`${process.env.PUBLIC_URL}/asset/background.png`}></img>
                <img className="paprica" alt="y_paprica_img" src={`${process.env.PUBLIC_URL}/asset/Yellow Paprica gif/front-walk.gif`}></img>
            </div>
        </div>
    )
};
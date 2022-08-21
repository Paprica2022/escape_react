import React from "react";

import RoomMain from "./RoomMain";
import "./RoomMain.scss"

const GameInfo = ({ socket, room_id, player, turn}) => {

    // TODO
    // useeffect -> 렌더링할 때 실행되게 해야한다 gameinfo 정보가 왔을 때
    // 각 플레이어 캐릭터 마다 객체를 생성 -> 각 객체마다 css 파일을 다르게 해야함

    return (
        <div>
            <RoomMain />
            <div>
                <img className="paprica" alt="y_paprica_img" src={`${process.env.PUBLIC_URL}/asset/Yellow Paprica gif/front-walk.gif`}></img>
            </div>
        </div>
    );
    
};

export default GameInfo;
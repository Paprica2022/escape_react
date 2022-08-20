import React from "react";
import { Chip, Button, Grid, Box } from '@mui/material';
import { Done, Close, CheckCircleOutline } from '@mui/icons-material';

import "./gamecont.scss";

const RoomInfo = ({ socket, room_id, room_status, player, turn}) => {
    
    /*
       * room_info :
        * {
        *     room_id,
        *     room_status,
        *     player[[id,isready]...],
        * }
    */

    return (
        <div className="readyPlayers">
        <Box style={{ padding: '10px', textAlign:"center"}}>
          <Grid item xs={12}>
              {player.map(([id, isready], idx) => (
                <Box item key={idx} xs={1}>
                  <Chip color={"primary"} label={id} variant={id === socket.id ? "" : "outlined"} icon={isready ? <Done/> : <Close/>}/>
                </Box>
              ))}
          </Grid>
        </Box>

        <Box style={{ display: "inline-block", float: "right"}}>
            {player.map(([id, isready], idx) => (
              id===socket.id && isready === 0 ? 
              <Button variant="contained" onClick={() => socket.emit("ready")} endIcon={<CheckCircleOutline/>} >
                준비하기
              </Button> : ""
            ))}  
        </Box>
            
        </div>
    );
};

export default RoomInfo;
import React, {useState} from "react";
import { Button, ButtonGroup , Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination, Paper, Box} from '@mui/material';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert" role="alert">
        field required
      </div>
    );
  }
};

const RoomContainer = ({ socket, room_list }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [room_sid, setRoomSid] = useState("");

  const onChangeUsername = (e) => {
    const sid = e.target.value;
    setRoomSid(sid);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const createRoom = () => {
    socket.emit("create_room", {room_sid});
  };

  const joinRoom = (room_id) => socket.emit("join_room", { room_id });

  return (
    <Paper elevation={5} style={{ padding: '20px' }}>
      <Box textAlign='center'>
        <ButtonGroup>
          <input type="text"
              className="form-control"
              name="room_sid"
              value={room_sid}
              onChange={onChangeUsername}
              validations={[required]}
            />
          <Button variant="contained" onClick={createRoom}>방 만들기</Button>
        </ButtonGroup>
      </Box>
      <br/>
      <TableContainer style={{ display: 'flex', height: '100%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>상태</TableCell>
              <TableCell>방id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {room_list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ room_id, room_status }, idx) => (
            <TableRow hover onClick={() => joinRoom(room_id)} key={idx}>
              <TableCell> {room_status}</TableCell>
              <TableCell> {room_id}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={room_list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default RoomContainer;

import CreateRoomForm from "./CreateRoomForm/CreateRoomForm";
import JoinRoomForm from "./JoinRoomForm/JoinRoomForm";

import "./index.css";

const Forms = ({ uuid, socket, setUser }) => {
  return (
    <div className="row h-100 pt-5">
      <div className="header w-100  text-center">
          <h2 className="text-heading">Doodle Share</h2>
      </div>
      <div className="col-md-4 mt-5 form-box p-5 border border-primary rounded-2 mx-auto d-flex flex-column align-items-center">
        <h1 className="text-roomName fw-bold">Create Room</h1>
        <CreateRoomForm uuid={uuid} socket={socket} setUser={setUser} />
      </div>
      <div className="col-md-4 mt-5 form-box p-5 border border-primary rounded-2 mx-auto d-flex flex-column align-items-center">
        <h1 className="text-roomName fw-bold">Join Room</h1>
        <JoinRoomForm uuid={uuid} socket={socket} setUser={setUser} />
      </div>
    </div>
  );
};

export default Forms;
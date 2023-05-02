import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { BsPencil, BsTrash } from "react-icons/bs";
import {
  getCurrentUser,
  getAllUsers,
  deletePost,
  getConnections,
} from "../../../api/FirestoreAPI";
import LikeButton from "../LikeButton";
import "./index.scss";

export default function EventCard({ event, id, getEditData }) {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [imageModal, setImageModal] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsers(setAllUsers);
  }, []);

  useEffect(() => {
    getConnections(currentUser.id, event.organizerId, setIsConnected);
  }, [currentUser.id, event.organizerId]);

  return isConnected || currentUser.id === event.organizerId ? (
    <div className="event-card" key={id}>
      <div className="event-image-wrapper">
        {currentUser.id === event.organizerId ? (
          <div className="action-container">
            <BsPencil
              size={20}
              className="action-icon"
              onClick={() => getEditData(event)}
            />
            <BsTrash
              size={20}
              className="action-icon"
              onClick={() => deletePost(event.id)}
            />
          </div>
        ) : (
          <></>
        )}

        <img
          alt="profile-image"
          className="profile-image"
          src={
            allUsers
              .filter((item) => item.id === event.organizerId)
              .map((item) => item.imageLink)[0]
          }
        />
        <div>
          <p
            className="name"
            onClick={() =>
              navigate("/profile", {
                state: { id: event?.organizerId, email: event.organizerEmail },
              })
            }
          >
            {event.organizerName}
          </p>
          <p className="headline">{event.date}</p>
          <p className="timestamp">{event.venue}</p>
        </div>
      </div>

      <p className="event-name">{event.name}</p>

      {event.eventImage ? (
        <img
          onClick={() => setImageModal(true)}
          src={event.eventImage}
          className="event-image"
          alt="event-image"
        />
      ) : (
        <></>
      )}

      <p
        className="description"
        dangerouslySetInnerHTML={{ __html: event.description }}
      ></p>

      <LikeButton
        userId={currentUser?.id}
        postId={event.id}
        currentUser={currentUser}
      />

      <Modal
        centered
        open={imageModal}
        onOk={() => setImageModal(false)}
        onCancel={() => setImageModal(false)}
        footer={[]}
      >
        <img
          onClick={() => setImageModal(true)}
          src={event.eventImage}
          className="event-image modal"
          alt="event-image"
        />
      </Modal>
    </div>
  ) : (
    <></>
  );
}

import React, { useState, useMemo } from "react";
import { postEvent, getEvents,  } from "../../../api/FirestoreAPI";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import ModalComponent from "../Modal";
import { uploadPostImage } from "../../../api/ImageUpload";
import { getUniqueID } from "../../../helpers/getUniqueId";
import EventCard from "../EventCard";
import "./index.scss";

export default function EventUpdate({ currentUser }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState("");
  const [allEvents, setAllEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [eventImage, setEventImage] = useState("");

  const sendEvent = async () => {
    let object = {
      eventDetails: eventDetails,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: currentUser.email,
      userName: currentUser.name,
      eventID: getUniqueID(),
      userID: currentUser.id,
      eventImage: eventImage,
    };
    await postEvent(object);
    await setModalOpen(false);
    setIsEdit(false);
    await setEventDetails("");
  };

  const getEditData = (events) => {
    setModalOpen(true);
    setEventDetails(events?.eventDetails);
    setCurrentEvent(events);
    setIsEdit(true);
  };

  const updateEventDetails = () => {
    post(currentEvent.eventID, eventDetails, eventImage);
    setModalOpen(false);
  };

  useMemo(() => {
    getEvents(setAllEvents);
  }, []);

  return (
    <div className="event-update-main">
      <div className="user-details">
        <img src={currentUser?.imageLink} alt="imageLink" />
        <p className="name">{currentUser?.name}</p>
        <p className="headline">{currentUser?.headline}</p>
      </div>
      <div className="event-update">
        <img
          className="event-image"
          src={currentUser?.imageLink}
          alt="imageLink"
        />
        <button
          className="open-event-modal"
          onClick={() => {
            setModalOpen(true);
            setIsEdit(false);
          }}
        >
          Create an Event
        </button>
      </div>

      <ModalComponent
        setEventDetails={setEventDetails}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        eventDetails={eventDetails}
        sendEvent={sendEvent}
        isEdit={isEdit}
        updateEventDetails={updateEventDetails}
        uploadPostImage={uploadPostImage}
        eventImage={eventImage}
        setEventImage={setEventImage}
        setCurrentEvent={setCurrentEvent}
        currentEvent={currentEvent}
      />

      <div>
        {allEvents.map((events) => {
          return (
            <div key={events.eventID}>
              <EventCard events={events} getEditData={getEditData} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

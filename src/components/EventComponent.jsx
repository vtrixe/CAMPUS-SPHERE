import React, { useState } from "react";
import Topbar from "./common/Topbar";
import { uploadImage } from "../api/ImageUpload";
import { addEvent } from "../api/FirestoreAPI";

export default function EventComponent({ currentUser }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [progress, setProgress] = useState(0);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    uploadImage(file, currentUser.uid, null, setProgress, setImage);
  };
  const handleLinkChange = (e) => setLink(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = { title, date, time, location, description, image, link };
    addEvent(eventData)
      .then(() => {
        console.log("Event added successfully!");
        // Reset the form after successful submission
        setTitle("");
        setDate("");
        setTime("");
        setLocation("");
        setDescription("");
        setImage("");
        setLink("");
      })
      .catch((error) => {
        console.error("Error adding event: ", error);
      });
  };
  
  return (
    <div className="event-component">
      <Topbar currentUser={currentUser} />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Event Title</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" value={date} onChange={handleDateChange} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input type="time" id="time" value={time} onChange={handleTimeChange} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" onChange={handleImageChange} />
          {progress > 0 && <progress value={progress} max="100" />}
        </div>
        <div className="form-group">
          <label htmlFor="link">Registration Link</label>
          <input type="url" id="link" value={link} onChange={handleLinkChange} />
        </div>
        <button type="submit">Post</button>
      </form>
      {title && (
        <div className="postcard">
        <h2>{title}</h2>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Location: {location}</p>
        <p>{description}</p>
        {image && <img src={image} alt={title} />}
        {link && <a href={link}>Register Now</a>}
      </div>)}
</div>
);
}
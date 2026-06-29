import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./Subject.css";
const socket = io(import.meta.env.VITE_API_URL);

export default function Maths2() {

  const subject = "Maths2";

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const [files, setFiles] = useState([]);

  const fileInput = useRef(null);

  const uploadFile = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("assignment", file);

    formData.append("branch", "ES");
    formData.append("year", 1);
    formData.append("subject", subject);
    formData.append("uploadedBy", user.name);

    try {

      const response = await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      alert(data.message);

      loadAssignments();

    } catch (err) {

      console.log(err);

      alert("Upload Failed");

    }

  };

  const loadAssignments = async () => {

    try {

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/assignments/ES/1/${subject}`
      );

      const data = await response.json();

      setFiles(data);

    } catch (err) {

      console.log(err);

    }

  };

useEffect(() => {

    // Load all previous messages from MySQL
    loadMessages();

    // Listen for new messages
    socket.on("receive_message", (newMessage) => {

        if (
            newMessage.branch === "ES" &&
            newMessage.year === 1 &&
            newMessage.subject === subject
        ) {
            setMessages((prev) => [...prev, newMessage]);
        }

    });

    return () => socket.off("receive_message");

}, []);

  const sendMessage = async () => {

    if (message.trim() === "") return;

    try {

        const response = await fetch(
            "http://localhost:5000/chat/send",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    branch: "ES",
                    year: 1,
                    subject: subject,
                    sender: user.name,
                    message: message

                })

            }
        );

        const data = await response.json();

        console.log(data.message);

        setMessage("");

        loadMessages();

    }
    catch(err){
        console.log(err);
    }

};

const loadMessages = async () => {

    try {

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/chat/ES/1/${subject}`
        );

        const data = await response.json();

        setMessages(data);

    } catch (err) {

        console.log(err);

    }

};

  return (
    <div className="subject-page">

      {/* Header */}
      <div className="subject-header">
        <h1>{subject}</h1>
      </div>

      {/* Main Content */}
      <div className="subject-body">

        {/* Assignment Side */}
        <div className="assignment-panel">

          <div className="upload-box">

            <h2>📂 Shared Assignments</h2>

            <p>
              Upload assignments, notes, tutorials and lab files here.
            </p>

            <button
              className="upload-btn"
              onClick={() => fileInput.current.click()}
            >
              + Upload Assignment
            </button>

            <input
              type="file"
              accept=".pdf"
              hidden
              ref={fileInput}
              onChange={uploadFile}
            />

          </div>

          <div className="files-box">

            {files.length === 0 ? (

              <p>No assignments uploaded yet.</p>

            ) : (

              files.map((file) => (

                <div className="file" key={file.id}>

                  <span>📄 {file.file_name}</span>

                  <button
                    onClick={() =>
                      window.open(
                        `${import.meta.env.VITE_API_URL}/uploads/${file.file_name}`,
                        "_blank"
                      )
                    }
                  >
                    Download
                  </button>

                </div>

              ))

            )}

          </div>

        </div>

        {/* Chat Side */}

        <div className="chat-panel">

          <h3>{subject} Discussion</h3>

          <div className="chat-box">

            {messages.map((msg) => (

              <div
                key={msg.id}
                className={
                  msg.sender === user.name
                    ? "sent-message"
                    : "received-message"
                }
              >

                <strong>{msg.sender}</strong>

                <p>{msg.message}</p>

              </div>

            ))}

          </div>

          <div className="chat-input">

            <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Message ${subject} group...`}
          />

            <button onClick={sendMessage}>
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ChatBar from "./ChatBar.jsx";
import ChatBody from "./ChatBody.jsx";
import ChatFooter from "./ChatFooter.jsx";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setMessages([...messages, data]);
    });
  }, [messages, socket]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;

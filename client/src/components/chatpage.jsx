/* eslint-disable react/prop-types */
import ChatBar from "./ChatBar.jsx";
import ChatBody from "./ChatBody.jsx";
import ChatFooter from "./ChatFooter.jsx";

const ChatPage = ({ socket }) => {
  console.log(socket);
  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;

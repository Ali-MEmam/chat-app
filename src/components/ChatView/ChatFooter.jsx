import React, { useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { FirebaseContext } from "../../context/FirebaseContext";
import { SecondUserContext } from "../../context/SecondUserContext";

const ChatFooter = () => {
  const [msgContent, setMsgContent] = useState("");
  const { userData } = useContext(CurrentUserContext);
  const { messagesCollection } = useContext(FirebaseContext);
  const { secondUserData } = useContext(SecondUserContext);
  const handleSendMsg = (e) => {
    e.preventDefault();
    messagesCollection.add({
      msg: msgContent,
      createdBy: userData.uid,
      sentTo: secondUserData.uid,
      createdAt: new Date(),
      relation: `${userData.uid}/${secondUserData.uid}`,
    });
    setMsgContent("");
  };

  return (
    <div className="chat-area-footer">
      <form onSubmit={handleSendMsg}>
        <input
          type="text"
          value={msgContent}
          onChange={(e) => setMsgContent(e.target.value)}
          placeholder="Type something here..."
        />
        <button type="submit">Send 🕊 </button>
      </form>
    </div>
  );
};

export default ChatFooter;

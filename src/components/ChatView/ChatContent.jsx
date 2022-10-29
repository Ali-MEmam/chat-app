import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { FirebaseContext } from "../../context/FirebaseContext";
import { SecondUserContext } from "../../context/SecondUserContext";
import ChatMessage from "./ChatMessage";

const ChatContent = () => {
  const { messagesCollection } = useContext(FirebaseContext);
  const [sortedMessages, setSortedMessages] = useState([]);
  const { userData } = useContext(CurrentUserContext);
  const { secondUserData } = useContext(SecondUserContext);
  const query =
    secondUserData?.uid &&
    messagesCollection
      .where("relation", "in", [
        `${userData.uid}/${secondUserData.uid}`,
        `${secondUserData.uid}/${userData.uid}`,
      ])
      .limit(25);
  const [messages] = useCollectionData(query);
  useEffect(() => {
    if (messages) {
      setSortedMessages(messages.sort((a, b) => a.createdAt - b.createdAt));
    }
  }, [messages]);
  return (
    <div className="chat-area-main">
      {sortedMessages.map((data, index) => (
        <ChatMessage
          owner={userData.uid === data.createdBy}
          msgData={data.msg}
          photoUrl={
            userData.uid === data.createdBy
              ? userData.photoURL
              : secondUserData.photoUrl
          }
          key={index}
        />
      ))}
    </div>
  );
};

export default ChatContent;

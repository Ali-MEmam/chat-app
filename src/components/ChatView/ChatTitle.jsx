import { useContext } from "react";
import { SecondUserContext } from "../../context/SecondUserContext";

const ChatTitle = () => {
  const { secondUserData } = useContext(SecondUserContext);

  return (
    <div className="chat-area-header">
      <div className="chat-area-title">{secondUserData?.displayName}</div>
    </div>
  );
};

export default ChatTitle;

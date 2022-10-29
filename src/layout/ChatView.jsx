import ChatFooter from "../components/ChatView/ChatFooter";
import ChatContent from "../components/ChatView/ChatContent";
import ChatTitle from "../components/ChatView/ChatTitle";
import FriendList from "../components/FriendsList/Friendslist";
import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";
import { SecondUserContext } from "../context/SecondUserContext";

const ChatView = () => {
  const { auth } = useContext(FirebaseContext);
  const { secondUserData } = useContext(SecondUserContext);
  return (
    <>
      <div className="header">
        <div className="user-settings">
          <button onClick={() => auth.signOut()}>Logout</button>
        </div>
      </div>
      <div className="wrapper">
        <div className="conversation-area">
          <FriendList />
        </div>
        <div className="chat-area">
          {secondUserData ? (
            <>
              <ChatTitle />
              <ChatContent />
              <ChatFooter />
            </>
          ) : (
            <div className="welcome-msg">Welcome In Our Chat</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatView;

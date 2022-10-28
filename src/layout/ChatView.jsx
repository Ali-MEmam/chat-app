import ChatFooter from "../components/ChatView/ChatFooter";
import ChatContent from "../components/ChatView/ChatContent";
import ChatTitle from "../components/ChatView/ChatTitle";
import FriendList from "../components/FriendsList/Friendslist";

const ChatView = () => {
  return (
    <>
      <div className="header">
        <div className="user-settings">
          <button onClick={() => console.log("Hello")}>Logout</button>
        </div>
      </div>
      <div className="wrapper">
        <div className="conversation-area">
          <FriendList />
        </div>
        <div className="chat-area">
          {1 ? (
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

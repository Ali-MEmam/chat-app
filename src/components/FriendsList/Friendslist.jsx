import FriendInbox from "./FriendInbox";

const FriendList = () => {
  return (
    <div className="conversation-area">
      <FriendInbox active />
      <FriendInbox />
      <FriendInbox />
    </div>
  );
};

export default FriendList;

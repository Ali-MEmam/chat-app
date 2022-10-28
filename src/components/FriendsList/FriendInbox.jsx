const FriendInbox = ({ active }) => {
  return (
    <div className={`msg ${active && "active"}`}>
      <div className="msg-profile group">
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="css-i6dzq1"
        >
          <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
          <path d="M22 8.5l-10 7-10-7" />
          <path d="M2 15.5l10-7 10 7M12 2v6.5" />
        </svg>
      </div>
      <div className="msg-detail">
        <div className="msg-username">CodePen Group</div>
      </div>
    </div>
  );
};

export default FriendInbox;

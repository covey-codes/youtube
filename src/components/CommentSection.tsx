import React, { useState, useRef } from "react";

const commentsData = [
  {
    id: 1,
    username: "AlexJohnson",
    userImage: "", // Placeholder for profile picture
    comment: "This is an amazing feature! Looking forward to more updates.",
    timePosted: "2 hours ago",
  },
  {
    id: 2,
    username: "SophieMiller",
    userImage: "", // Placeholder for profile picture
    comment: "Great work! The UI is very clean and easy to navigate.",
    timePosted: "30 minutes ago",
  },
  {
    id: 3,
    username: "TechGuru99",
    userImage: "", // Placeholder for profile picture
    comment: "I love how smooth everything runs. Keep up the great work!",
    timePosted: "5 hours ago",
  },
  {
    id: 4,
    username: "Liam_Writes",
    userImage: "", // Placeholder for profile picture
    comment: "Awesome! Will there be any new features coming soon?",
    timePosted: "1 day ago",
  },
];

const CommentSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [comments, setComments] = useState(commentsData);
  const [newComment, setNewComment] = useState("");
  const inputRef = useRef(null);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentData = {
      id: comments.length + 1,
      username: "Anonymous", // Default username for now
      userImage: "", // Placeholder for profile picture
      comment: newComment,
      timePosted: "Just now",
    };

    setComments([newCommentData, ...comments]);
    setNewComment("");

    // Focus back on input after adding a comment
    inputRef.current?.focus();
  };

  return (
    <div>
      <div>
        {comments
          .slice(0, showAll ? comments.length : 1)
          .map((comment, index) => (
            <div
              key={comment.id}
              style={{
                border: "1px solid #ddd",
                margin: "10px",
                borderRadius: "30px",
                padding: "15px",
                cursor: !showAll ? "pointer" : "default",
                position: "relative",
              }}
              onClick={() => !showAll && setShowAll(true)}
            >
              {!showAll ? (
                <strong>Comments ({comments.length})</strong>
              ) : (
                <div>
                  <strong>{comment.username}</strong>
                  <p style={{ fontSize: "12px", color: "#666" }}>
                    {comment.timePosted}
                  </p>
                </div>
              )}

              <p style={{ marginTop: "10px" }}>{comment.comment}</p>

              {showAll && index === 0 && (
                <button
                  onClick={() => setShowAll(false)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "none",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  ✖
                </button>
              )}
            </div>
          ))}

        {/* Input box - Only visible when comments are open */}
        {showAll && (
          <div style={{ margin: "10px", padding: "10px" }}>
            <input
              ref={inputRef}
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              style={{
                width: "80%",
                padding: "10px",
                borderRadius: "20px",
                border: "1px solid #ddd",
                outline: "none",
              }}
            />
            <button
              onClick={handleAddComment}
              style={{
                marginLeft: "10px",
                padding: "10px 15px",
                borderRadius: "20px",
                border: "none",
                backgroundColor: "#007bff",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;

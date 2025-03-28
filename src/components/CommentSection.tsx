import React, { useState, useRef } from "react";

const commentsData = [];

const CommentSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [comments, setComments] = useState(commentsData);
  const [newComment, setNewComment] = useState("");
  const inputRef = useRef(null);

  const handleAddComment = (e) => {
    e.preventDefault(); 
    if (newComment.trim() === "") return;

    const newCommentData = {
      id: Date.now(),
      username: "Anonymous",
      userImage: "",
      comment: newComment.trim(),
      timePosted: "Just now",
    };

    setComments([newCommentData, ...comments]);
    setNewComment("");
    inputRef.current?.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddComment(e);
    }
  };

  return (
    <div className="comment-section">
      <div>
        {comments
          .slice(0, showAll ? comments.length : 1)
          .map((comment, index) => (
            <div
              key={comment.id}
              className="comment-card"
              style={{
                border: "1px solid #ddd",
                margin: "10px",
                borderRadius: "10px",
                padding: "15px",
                cursor: !showAll ? "pointer" : "default",
                position: "relative",
                backgroundColor: "#fff",
              }}
              onClick={!showAll ? () => setShowAll(true) : undefined}
            >
              {!showAll ? (
                <strong>Comments ({comments.length})</strong>
              ) : (
                <div className="comment-header">
                  <div>
                    <strong>{comment.username}</strong>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#666",
                        margin: "2px 0 0 0",
                      }}
                    >
                      {comment.timePosted}
                    </p>
                  </div>
                </div>
              )}

              <p style={{ marginTop: "10px", marginBottom: "0" }}>
                {comment.comment}
              </p>

              {showAll && index === 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAll(false);
                  }}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "none",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    color: "#666",
                  }}
                  aria-label="Close comments"
                >
                  ✖
                </button>
              )}
            </div>
          ))}

        {showAll && (
          <form
            onSubmit={handleAddComment}
            style={{ margin: "10px", padding: "10px" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a comment..."
              style={{
                width: "80%",
                padding: "10px",
                borderRadius: "20px",
                border: "1px solid #ddd",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <button
              type="submit"
              style={{
                marginLeft: "10px",
                padding: "10px 15px",
                borderRadius: "20px",
                border: "none",
                backgroundColor: "#007bff",
                color: "#fff",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor =
                  "#0056b3")
              }
              onMouseOut={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor =
                  "#007bff")
              }
            >
              Post
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CommentSection;

import React, { useState } from "react";
import { Comment } from "../types/Comment";
import { commentsData } from "../data/commentsData";
import { CommentCard } from "./CommentCard";
import { CommentInput } from "./CommentInput";

export const CommentSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [comments, setComments] = useState<Comment[]>(commentsData);
  const [sortBy, setSortBy] = useState<"top" | "newest">("newest");

  const addComment = (commentText: string) => {
    const newComment: Comment = {
      id: Date.now(),
      username: "Anonymous",
      userImage: "",
      comment: commentText,
      timePosted: "Just now",
    };
    setComments([newComment, ...comments]);
  };

  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === "newest") {
      return b.id - a.id;
    }
    return a.id - b.id;
  });

  return (
    <div className="comment-section">
      {showAll && (
        <div style={{ margin: "10px" }}>
          <button
            onClick={() => setSortBy("top")}
            style={{
              padding: "5px 10px",
              marginRight: "10px",
              backgroundColor: sortBy === "top" ? "#007bff" : "#ddd",
              color: sortBy === "top" ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Top
          </button>
          <button
            onClick={() => setSortBy("newest")}
            style={{
              padding: "5px 10px",
              backgroundColor: sortBy === "newest" ? "#007bff" : "#ddd",
              color: sortBy === "newest" ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Newest
          </button>
        </div>
      )}

      {(!showAll ? comments.slice(0, 1) : sortedComments).map(
        (comment, index) => (
          <div key={comment.id} style={{ position: "relative" }}>
            <CommentCard
              comment={comment}
              isPreview={!showAll}
              totalComments={comments.length}
              onClick={!showAll ? () => setShowAll(true) : undefined}
            />
            {showAll && index === 0 && (
              <button
                onClick={() => setShowAll(false)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
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
        )
      )}

      {showAll && (
        <div style={{ margin: "10px" }}>
          <CommentInput onAddComment={addComment} />
        </div>
      )}
    </div>
  );
};

export default CommentSection;

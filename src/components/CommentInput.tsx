import React, { useState, useRef } from "react";

interface CommentInputProps {
  onAddComment: (comment: string) => void;
}

export const CommentInput: React.FC<CommentInputProps> = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment.trim());
      setNewComment("");
      inputRef.current?.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "10px", padding: "10px" }}>
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
          boxSizing: "border-box",
        }}
      />
      <button
        type="submit"
        className="post-button"
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
      >
        Post
      </button>
    </form>
  );
};

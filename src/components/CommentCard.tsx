import React from "react";
import { Comment } from "../types/section";

interface CommentCardProps {
  comment: Comment;
  isPreview?: boolean;
  totalComments?: number;
  onClick?: () => void;
}

export const CommentCard: React.FC<CommentCardProps> = ({
  comment,
  isPreview = false,
  totalComments,
  onClick,
}) => (
  <div
    className="comment-card"
    onClick={onClick}
    style={{
      border: "1px solid #ddd",
      margin: "10px",
      borderRadius: "10px",
      padding: "15px",
      cursor: isPreview ? "pointer" : "default",
      position: "relative",
      backgroundColor: "#fff",
    }}
  >
    {isPreview ? (
      <div>
        <strong>Comments ({totalComments})</strong>
        <p style={{ marginTop: "10px", marginBottom: "0" }}>
          {comment.comment}
        </p>
      </div>
    ) : (
      <div className="comment-header">
        <strong>{comment.username}</strong>
        <p style={{ fontSize: "12px", color: "#666", margin: "2px 0 0 0" }}>
          {comment.timePosted}
        </p>
        <p style={{ marginTop: "10px", marginBottom: "0" }}>
          {comment.comment}
        </p>
      </div>
    )}
  </div>
);

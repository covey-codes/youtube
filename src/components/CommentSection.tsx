// components/CommentSection.tsx
import React from "react";
import { useComments } from "../hooks/useComments";
import { CommentCard } from "./CommentCard";
import { CommentInput } from "./CommentInput";

export const CommentSection: React.FC = () => {
  const {
    showAll,
    setShowAll,
    comments,
    sortedComments,
    sortBy,
    setSortBy,
    addComment,
  } = useComments();

  return (
    <div className="comment-section lg:ml-[85px]">
      {showAll && (
        <div className="m-2 flex gap-2">
          <button
            onClick={() => setSortBy("top")}
            className={`px-2 py-1 rounded ${
              sortBy === "top"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            Top
          </button>
          <button
            onClick={() => setSortBy("newest")}
            className={`px-2 py-1 rounded ${
              sortBy === "newest"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            Newest
          </button>
        </div>
      )}

      {(!showAll ? comments.slice(0, 1) : sortedComments).map(
        (comment, index) => (
          <div key={comment.id} className="relative">
            <CommentCard
              comment={comment}
              isPreview={!showAll}
              totalComments={comments.length}
              onClick={!showAll ? () => setShowAll(true) : undefined}
            />
            {showAll && index === 0 && (
              <button
                onClick={() => setShowAll(false)}
                className="absolute top-5 right-5 text-gray-600 text-lg border-none bg-none cursor-pointer"
                aria-label="Close comments"
              >
                ✖
              </button>
            )}
          </div>
        )
      )}

      {showAll && (
        <div className="m-2">
          <CommentInput onAddComment={addComment} />
        </div>
      )}
    </div>
  );
};

export default CommentSection;

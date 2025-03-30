// hooks/useComments.ts
import { useState } from "react";
import { Comment } from "../types/section";
import { commentsData } from "../constants/commentsData";

export const useComments = () => {
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

  const sortedComments = [...comments].sort((a, b) =>
    sortBy === "newest" ? b.id - a.id : a.id - b.id
  );

  return {
    showAll,
    setShowAll,
    comments,
    sortedComments,
    sortBy,
    setSortBy,
    addComment,
  };
};

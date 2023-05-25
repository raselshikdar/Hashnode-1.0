import React from "react";
import type { BookmarkInterface } from "../Bookmarks";

const BookmarkCard = ({ bookmark }: { bookmark: BookmarkInterface }) => {
  return (
    <div className="border-b border-border-light py-2 last:border-0 dark:border-border">
      <h1 className="mb-2 text-base font-semibold text-gray-600 dark:text-white">
        {bookmark.title}
      </h1>
      <div className="flex gap-2 text-sm text-gray-500 dark:text-text-secondary">
        <span>{bookmark.user}</span>
        <span>-</span>
        <span>{bookmark.read_time} min read</span>
      </div>
    </div>
  );
};

export default BookmarkCard;

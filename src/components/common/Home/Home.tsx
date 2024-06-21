"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { actGetPosts } from "@/lib/features/posts/postsSlice";

import BlogPost from "../BlogPost/BlogPost";
import FooterPagination from "./Paginition";
import LoadingSpinner from "../Feedback/LoadingSpinner";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.posts);

  // Pagnination
  const PRODUCT_PER_PAGE = 9;
  const pages = Math.ceil(records.length / PRODUCT_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE;

  const posts = records.slice(startIndex, finishIndex);

  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }
  // Fetching data
  useEffect(() => {
    if (!records.length) {
      dispatch(actGetPosts());
    }
  }, [dispatch, records]);

  if (loading === "pending") {
    return <LoadingSpinner />;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="flex gap-1 justify-center  flex-wrap w-full  py-[20px] ">
        {posts.map((record) => (
          <BlogPost
            key={record.id}
            title={record.title}
            body={record.body}
            id={record.id}
          />
        ))}
      </div>
      <FooterPagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        generatedPages={generatedPages}
      />
    </div>
  );
}

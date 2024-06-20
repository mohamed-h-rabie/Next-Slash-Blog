"use client";
import React, { useEffect, useState } from "react";

import BlogPost from "./components/common/BlogPost/BlogPost";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { actGetPosts } from "@/lib/features/posts/postsSlice";

import FooterPagination from "./Paginition";

export default function CardWithForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.posts);

  // Pagnination
  const PRODUCT_PER_PAGE = 10;
  const pages = Math.ceil(records.length / PRODUCT_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE;

  const posts = records.slice(startIndex, finishIndex);

  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }
  useEffect(() => {
    dispatch(actGetPosts());
  }, [dispatch]);
  return (
    <>
      <div className="flex gap-1 justify-center flex-wrap w-full  py-[20px] ">
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
    </>
  );
}

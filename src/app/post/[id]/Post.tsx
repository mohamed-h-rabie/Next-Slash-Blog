"use client";

import { actGetPostById, postCleanUp } from "@/lib/features/post/postSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
export default function Post() {
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.post);
  useEffect(() => {
    dispatch(actGetPostById(params.id as string));
    return () => {
      dispatch(postCleanUp());
    };
  }, [dispatch, params]);
  if (loading === "pending")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={"animate-spin flex justify-center items-center"}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );
  return (
    <div className="m-5">
      <article>
        <h2 className="mt-10 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {records[0]?.title}
        </h2>

        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {records[0]?.body}
          </p>
        </div>
      </article>
    </div>
  );
}

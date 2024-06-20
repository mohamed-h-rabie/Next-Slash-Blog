"use client";
import { actGetPostById, postCleanUp } from "@/lib/features/post/postSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  const params = useParams();
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
        <button>delete</button>
      </article>
    </div>
  );

  //     <div className='max-w-[1240px] mx-auto'>

  //         <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
  //         md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

  //             <div className='col-span-2 '>
  //                 <img className='h-56 w-full object-cover' src={blog.coverImg} />
  //                 <h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
  //                 <div className='pt-5'><p>{blog.content}</p></div>

  //             </div>

  //             <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'>
  //                 <div>
  //                     <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={blog.authorImg} />
  //                     <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.authorName}</h1>
  //                     <p className='text-center text-gray-900 font-medium'>{blog.authorDesc}</p>
  //                 </div>

  //             </div>

  //         </div>

  //     </div>
}

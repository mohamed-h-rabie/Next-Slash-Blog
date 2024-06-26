import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type TBlog = {
  title: string;
  body: string;
  id: number;
};
export default function BlogPost({ title, body, id }: TBlog) {
  return (
    <Card className="w-[350px] flex flex-col justify-between">
      <CardHeader>
        <CardTitle> {title}</CardTitle>
        <CardDescription> {body.slice(0, 15)}...</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/post/${id}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

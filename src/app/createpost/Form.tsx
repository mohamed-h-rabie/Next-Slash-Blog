"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { actCreatePost } from "@/lib/features/createPost/createPostSlice";
//Zod Vaildation
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//React-Hook-Form
import { SubmitHandler, useForm } from "react-hook-form";
//Shadcn UI
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

///Valdation
const formSchema = z.object({
  title: z.string().min(2, { message: "Title Is Required" }),
  body: z.string().min(2, { message: "Body Is Required" }),
});

type formType = z.infer<typeof formSchema>;

export default function Form() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { toast } = useToast();

  const { register, handleSubmit, formState } = useForm<formType>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const submitForm: SubmitHandler<formType> = async (data) => {
    const { title, body } = data;
    dispatch(actCreatePost({ title, body, userId: 1 }))
      .unwrap()
      .then(() => router.push("/"))
      .then(() =>
        toast({
          title: "Slash/Blog: Catch up",
          description: `Your Post is added `,
        })
      );
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="border-2 border-gray-300 dark:border-gray-700 p-4 rounded-md shadow-md space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Create Post</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Please fill the below form to post in Slash/Blog
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-600 dark:text-gray-400">
              Title
            </Label>
            <Input
              id="title"
              {...register("title")}
              name="title"
              placeholder="Enter your Title"
              className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
            {formState.errors?.title && (
              <p className="text-red-600">*{formState.errors?.title.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-600 dark:text-gray-400">
              Body
            </Label>

            <Textarea
              {...register("body")}
              placeholder="Type your Body here."
              id="body"
              className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
            {formState.errors?.body && (
              <p className="text-red-600">*{formState.errors?.body.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

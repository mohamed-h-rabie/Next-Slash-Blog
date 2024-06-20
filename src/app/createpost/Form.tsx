// "use client";
// import React from "react";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// });

// export default function Form() {
//   const { handleSubmit, register } = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),

//     defaultValues: {
//       username: "",
//     },
//   });
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//   }
//   return (

//   );
// }

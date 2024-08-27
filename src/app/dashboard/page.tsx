"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";

import { Posts } from "@/components/globals/posts";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "@clerk/nextjs";

const PostSchema = z.object({
  title: z.string(),
  content: z.string(),
  author: z.string(),
});

export default function Home() {

  const [status, setStatus] = useState("");

  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      content: "",
      author: "",
    }
  })

  const session = useSession();

  const onSubmit = (values: z.infer<typeof PostSchema>) => {
    values.author = session?.session?.user?.firstName || "Anonymous";
    try {
      axios.post("/api/posts", values).then((response) => {
        setStatus(response.data)
        window.location.reload();
      })
    } catch (error) {
      console.log(error);
      alert(status);
    }
  }

  return (
    <div className="flex md:flex-row flex-col h-full w-full space-x-4">
      <Posts />
      <div className="w-full md:w-1/2 lg:1/4 h-full p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Title"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Content"
                        className="h-64 resize-none"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

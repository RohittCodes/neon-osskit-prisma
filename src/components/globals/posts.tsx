"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Post {
    id: number;
    title: string;
    content: string;
    username: string;
}

export const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get("/api/posts").then((response) => {
            setPosts(response.data);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>;

    if (!posts.length && !loading) return <p>No posts found</p>;

    return (
        <div className="w-full lg:3/4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {posts.map((post) => (
                <Card key={post.id} className="mb-4 h-fit">
                    <CardHeader className="flex items-start">
                        <Badge className="mr-2">
                            {post.id}
                        </Badge>
                        <span className="font-bold">
                            {post.title}
                        </span>
                    </CardHeader>
                    <CardContent className="h-fit">
                        <p className="text-sm">
                            {post.content}
                        </p>
                    </CardContent>
                    <CardFooter className="h-fit">
                        <p className="text-sm">
                            <span className="font-bold">Author:</span> {post.username}
                        </p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

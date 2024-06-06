'use client';
import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <main className="flex-1 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 p-6 md:p-8 lg:p-10">
    <div className="space-y-8">
    {posts.map((post) => (
          <div key={post.id} className="grid gap-4">
            <img
              src="/placeholder.svg"
              width={1200}
              height={600}
              alt="Featured Post"
              className="rounded-lg object-cover aspect-[2/1]"
            />
            <div className="space-y-2">
              <Link href={`/home/${post.id}`} passHref className="text-2xl font-bold hover:underline underline-offset-4">
                {post.title}
              </Link>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div>{post.author}</div>
                <div>{post.date}</div>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                {post.description}
              </p>
            </div>
          </div>
        ))}
        
    </div>
    <div className="space-y-8">
        <Card>
            <CardHeader>
                <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Web Development
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Design
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Programming
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Technology
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Productivity
                </Link>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
            </CardHeader>
            {posts.map((post) => (
            <CardContent key={post.id} className="grid gap-4">
                <Link
                    href="#"
                    className="flex items-center gap-4 text-sm font-medium hover:underline underline-offset-4"
                    prefetch={false}
                >
                    <img
                        src="/placeholder.svg"
                        width={80}
                        height={80}
                        alt="Recent Post 1"
                        className="rounded-lg object-cover aspect-square"
                    />
                    <div className="space-y-1">
                        <div>{post.title}</div>
                        <div className="text-gray-500">{post.date}</div>
                    </div>
                </Link>
            </CardContent>
            ))}
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Search</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="flex space-x-2">
                    <Input type="search" placeholder="Search blog posts..." className="flex-1" />
                    <Button type="submit">Search</Button>
                </form>
            </CardContent>
        </Card>
    </div>
</main>
  );
}

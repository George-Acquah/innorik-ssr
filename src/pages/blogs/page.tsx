import { BlogsList, Button, Typography } from "@/components";
import { fetcher } from "@/lib/fetcher";
import { Suspense } from "react";

function BlogsPage() {
  const blogsDataPromise = fetcher<_IBlog[]>("api/blogs");
  return (
    <div className="flex gap-4 flex-col w-full md:max-w-5xl lg:max-w-4xl mx-auto">
      <title>Blog Page</title>
      {/* Blogs Head */}
      <div className="flex justify-between items-center">
        <Typography variant="h2">Welcome to My Blog</Typography>

        <Button variant="secondary" size="sm" className="px-6">
          Create a blog
        </Button>
      </div>

      <Suspense key={'blogs-lists'} fallback={ <h3>loading blogs ...</h3>}>
        <BlogsList blogsPromise={blogsDataPromise}/>
      </Suspense>
    </div>
  );
}

export default BlogsPage;

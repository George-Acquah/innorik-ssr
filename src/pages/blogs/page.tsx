import { BlogsList, Typography } from "@/components";
import BlogActions from "@/components/blogs/blogs-action";
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

        <BlogActions
          type="create"
          trigger={
            <div className="px-6 bg-secondary rounded-md py-1 text-white">
              Create a blog
            </div>
          }
        />
      </div>

      <Suspense key={"blogs-lists"} fallback={<h3>loading blogs ...</h3>}>
        <BlogsList blogsPromise={blogsDataPromise} />
      </Suspense>
    </div>
  );
}

export default BlogsPage;

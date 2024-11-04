import BlogPreview from "@/components/blogs/blog-preview";
import { fetcher } from "@/lib/fetcher";
import { Suspense } from "react";
import { useParams } from "react-router-dom";

const BlogPostPage = () => {
  const { slug } = useParams();
  const blogPromise = fetcher<_IBlog>(`api/blogs/${slug}`);
  return (
    <div>
      <Suspense fallback={<h3>loading blog preview ...</h3>}>
        <BlogPreview blogPromise={blogPromise}/>
      </Suspense>
    </div>
  )
}

export default BlogPostPage;
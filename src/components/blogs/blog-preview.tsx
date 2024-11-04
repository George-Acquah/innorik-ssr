import { use } from "react";
import { Typography } from "..";

interface _IBlogPreview {
  blogPromise: Promise<_IBlog>;
}
const BlogPreview = ({ blogPromise }: _IBlogPreview) => {

  const blog = use(blogPromise);
  return (
    <div className="space-y-4">
      <Typography variant="h2">{ blog.title }</Typography>
      {JSON.stringify(blog)}
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <div className="footer">
        
      </div>
    </div>
  );
}

export default BlogPreview;
import { use } from "react";
import { Typography } from "..";
import { formatDate, truncateMessage } from "@/utils/root.utils";

interface _IBlogPreview {
  blogPromise: Promise<_IBlog>;
}
const BlogPreview = ({ blogPromise }: _IBlogPreview) => {
  const blog = use(blogPromise);
  return (
    <div className="space-y-4">
      <Typography variant="h2">{blog.title}</Typography>
      <div className="flex items-center gap-2">
        <Typography variant="p" className="font-bold">
          Blog By:
        </Typography>
        <Typography variant="p" className="">
          {truncateMessage(blog.author, 20)}
        </Typography>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <div className="footer">
        <div className="flex justify-end items-center gap-4">
          <Typography variant="p">
            Created on {formatDate(blog.createdAt)}
          </Typography>
          <Typography variant="p">
            Updated on {formatDate(blog.updatedAt)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;

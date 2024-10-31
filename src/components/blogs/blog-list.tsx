import { use } from "react";
import { Badge, Card, CardContent, CardFooter, Typography } from "..";
import { formatDate } from "@/utils/root.utils";
import { CalendarDaysIcon, HandThumbUpIcon, HeartIcon, UserIcon } from "@heroicons/react/24/outline";

interface _IBlogsList {
  blogsPromise: Promise<_IBlog[]>;
}

const BlogsList = ({ blogsPromise }: _IBlogsList) => {
  const blogs = use(blogsPromise);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-4">
      {blogs.map((blog, index) => (
        <Card key={index} className="py-2">
          <CardContent className="space-y-2 pb-4">
            <div className="">
              <Typography variant="h3">{blog.title}</Typography>
              <Typography variant="p" className="flex gap-2">
                <UserIcon className="w-4" />
                {blog.author}
              </Typography>
            </div>
            
            <Typography variant="p" className="blog-content">
              {blog.content.length > 100
                ? `${blog.content.substring(0, 100)}...`
                : blog.content}
            </Typography>

            <div className="flex justify-between items-center">
              <Typography variant="p" className="flex gap-2">
                <CalendarDaysIcon className="w-4" />
                {formatDate(blog.createdAt)}
              </Typography>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-[1px]">
                  <HandThumbUpIcon className="w-5" />
                  <Typography variant="span" className="font-medium">
                    {blog.meta?.votes}
                  </Typography>
                </div>
                <div className="flex items-center gap-[1px]">
                  <HeartIcon className="w-5" />
                  <Typography variant="span" className="font-medium">
                    {blog.meta?.votes}
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="pb-1 space-y-2">
            {blog.tags &&
              blog.tags.map((tag, tagIndex) => (
                <Badge
                  variant={"default"}
                  className="rounded-full "
                  key={tagIndex}
                >
                  <Typography
                    variant="span"
                    className="text-white dark:text-white"
                  >
                    {tag}
                  </Typography>
                </Badge>
              ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BlogsList;

import { use } from "react";
import { Typography, Card, CardContent, Chip, Button } from "../ui";
import { formatDate } from "../utils";

interface _IBlogsList {
  blogsPromise: Promise<_IBlog[]>;
}

const BlogsList = ({ blogsPromise }: _IBlogsList) => {
  const blogs = use(blogsPromise);

  return (
    <div className="blogs-list">
      {blogs.map(
        (blog, index) =>
          !blog.hidden && (
            <Card key={index} className="blog-card">
              <CardContent>
                <Typography variant="h2">{blog.title}</Typography>
                <Typography variant="subtitle1">
                  By {blog.author} on {formatDate(blog.createdAt)}
                </Typography>
                <Typography variant="body1" className="blog-content">
                  {blog.content.length > 100
                    ? `${blog.content.substring(0, 100)}...`
                    : blog.content}
                </Typography>
                <div className="tags-container">
                  {blog.tags &&
                    blog.tags.map((tag, tagIndex) => (
                      <Chip key={tagIndex} label={tag} />
                    ))}
                </div>
                <div className="meta-info">
                  <Button
                    variant="outlined"
                    onClick={() =>
                      alert(
                        `Votes: ${blog.meta?.votes}, Favorites: ${blog.meta?.favs}`
                      )
                    }
                  >
                    View Meta
                  </Button>
                </div>
                {blog.comments && blog.comments.length > 0 && (
                  <div className="comments-section">
                    <Typography variant="h3">Comments:</Typography>
                    {blog.comments.map((comment, commentIndex) => (
                      <div key={commentIndex} className="comment">
                        <Typography variant="body2">{comment.body}</Typography>
                        <Typography variant="caption">
                          {formatDate(comment.date)}
                        </Typography>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )
      )}
    </div>
  );
};

export default BlogsList;

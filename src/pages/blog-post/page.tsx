import { Typography } from "@/components";
import { useParams } from "react-router-dom";

const BlogPostPage = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <div>
      <Typography variant="h2">welcome to My Blog</Typography>
    </div>
  )
}

export default BlogPostPage;
import { Button, Typography } from "@/components";
import { Suspense, lazy } from "react";

const Card = lazy(() => import("../../Card"));

function BlogsPage() {
  
  return (
    <div className="flex gap-4 flex-col w-full md:max-w-5xl lg:max-w-4xl mx-auto">
      <title>Blog Page</title>
      {/* Blogs Head */}
      <div className="w-full flex justify-between items-center">
        <Typography variant="h2">Welcome to My Blog</Typography>

        <Button variant="secondary" size="sm" className="px-6">
          Create a blog
        </Button>
      </div>

      {/* Blogs Content */}
      <div className="w-full flex flex-col gap-8">
        <Suspense fallback={<p>Loading card component...</p>}>
          <Card />
        </Suspense>
      </div>

      <div className="grid">

      </div>
    </div>
  );
}

export default BlogsPage;

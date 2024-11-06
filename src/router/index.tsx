import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/page";
import ExtendedError from "../components/extended-error";
import { RootLayout } from "../layout";
import { AboutPage, BlogPostPage, BlogsPage } from "@/pages";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<HomePage />} />
      </Route>
      <Route path="*" element={<ExtendedError statusCode={404} />} />
    </Routes>
  );
}

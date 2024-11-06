import { Typography, Badge } from "@/components";
import {
  UserIcon,
  HeartIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <div className="flex flex-col h-screen">
        <div className="space-y-4 flex-grow">
          <Typography variant="h2" className="text-center">
            About Us
          </Typography>

          <Typography variant="p" className="text-lg">
            Welcome to our Blog App! We're passionate about creating a space
            where readers can explore insightful articles on a wide variety of
            topics, from technology and lifestyle to business and travel. Our
            goal is to provide engaging, informative content that sparks
            curiosity and inspires readers to learn and grow.
          </Typography>

          <Typography variant="p" className="text-lg">
            Our team of dedicated writers and editors strives to bring you
            well-researched and thoughtfully crafted articles. We believe in the
            power of knowledge-sharing and are committed to building a community
            where ideas and perspectives can be freely exchanged.
          </Typography>
        </div>
        <div className="footer flex-1">
          <div className="flex justify-center gap-4 mt-4">
            <Badge variant="default" className="rounded-full">
              <Typography variant="span" className="text-white dark:text-white">
                Technology
              </Typography>
            </Badge>
            <Badge variant="default" className="rounded-full">
              <Typography variant="span" className="text-white dark:text-white">
                Lifestyle
              </Typography>
            </Badge>
            <Badge variant="default" className="rounded-full">
              <Typography variant="span" className="text-white dark:text-white">
                Business
              </Typography>
            </Badge>
            <Badge variant="default" className="rounded-full">
              <Typography variant="span" className="text-white dark:text-white">
                Travel
              </Typography>
            </Badge>
          </div>

          <div className="flex justify-around mt-6">
            <div className="flex items-center gap-2">
              <UserIcon className="w-6 text-blue-500" />
              <Typography
                variant="span"
                className="text-gray-600 dark:text-gray-400"
              >
                Passionate Writers
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <HeartIcon className="w-6 text-red-500" />
              <Typography
                variant="span"
                className="text-gray-600 dark:text-gray-400"
              >
                Community-Focused
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDaysIcon className="w-6 text-green-500" />
              <Typography
                variant="span"
                className="text-gray-600 dark:text-gray-400"
              >
                Fresh Content Weekly
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

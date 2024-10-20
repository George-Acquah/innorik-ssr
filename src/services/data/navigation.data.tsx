import {
  BriefcaseIcon,
  CodeBracketIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const sidebarLinks: _ILinks[] = [
  {
    label: "Home",
    href: "/",
    icon: (
      <CodeBracketIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "About",
    href: "/about",
    // parent: "Tables",
    icon: (
      <BriefcaseIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Contact",
    href: "/contact",
    icon: (
      <UsersIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

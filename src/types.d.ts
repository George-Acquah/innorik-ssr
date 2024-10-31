interface _ILinks {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
  parent?: string;
}

interface _IComment {
  body: string;
  date: string;
}

interface _IBlog {
  title: string;
  author: string;
  content: string;
  hidden?: boolean;
  tags?: string[];
  category?: string;
  meta?: {
    votes: number;
    favs: number;
  };
  comments?: _IComment[];
  createdAt: string;
  updatedAt: string;
}

interface _IChildren {
  children: React.ReactNode;
}

type _TVariants = "default" | "secondary" | "destructive" | "outline";
type _TRefDivElement = React.HTMLAttributes<HTMLDivElement>;
type _TRefImageElement = React.HTMLAttributes<HTMLImageElement>;
type _TRefPElement = React.HTMLAttributes<HTMLParagraphElement>;
type _TSizes = "default" | "lg" | "sm" | "icon";
type _TFieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "radio"
  | "select";
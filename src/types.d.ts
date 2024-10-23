interface _ILinks {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
  parent?: string;
}

interface _IBlog {
  id: number;
  title: string;
  content: string;
  tags: string[];
  category?: string;
}

interface _IChildren {
  children: React.ReactNode;
}

type _TVariants = "default" | "secondary" | "destructive" | "outline";

type _TSizes = "default" | "lg" | "sm" | "icon";
type _TFieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "radio"
  | "select";
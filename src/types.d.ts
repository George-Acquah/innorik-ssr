interface _ILinks {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
  parent?: string;
}

interface _IChildren {
  children: React.ReactNode;
}

interface _IEntityData {
  count: number;
  type: string;
}

interface _ISearchParams {
  SESSION: string;
  ERROR: string;
  ERR_MSG: string;
  ERR_DESC: string;
  BTN_LABEL: string;
  ENTITY_TYPE: string;
  QUERY: string;
  FORM_STEP: string;
}

interface _ISearchQuery {
  searchParams?: {
    q?: string;
    page?: string;
    size?: string;
  };
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

  type _TRefDivElement = React.HTMLAttributes<HTMLDivElement>;
  type _TRefImageElement = React.HTMLAttributes<HTMLImageElement>;
  type _TRefPElement = React.HTMLAttributes<HTMLParagraphElement>;
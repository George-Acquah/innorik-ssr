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
  _id: string;
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

interface _IForms {
  id?: string;
  action: any;
  actionType: "create" | "update";
  type: string;
  includeFiles?: boolean;
  formType: "group" | "single";
  fieldConfigs: _IDetail[]; // Array of field configurations
  data?: Record<string, any>;
}

interface _IRadio {
  id: string;
  checked: boolean;
  value: string;
  label: string;
  bg?: string;
}

interface _IDetail {
  id: string;
  placeholder?: string;
  value?: string;
  label: string;
  width?: string;
  bg?: string;
  input_type?: "select" | "radio" | "textarea";
  icon?: string;
  onChange?: any;
  options?: string[];
  radio?: _IRadio[];
  type: string;
  disabled?: boolean;
  mt?: boolean;
  tooltip?: boolean;
  group?: string; //
  className?: string;
  errors?: Record<string, string[] | undefined> | null;
}
interface _IActionBtn {
  id: string;
  label: string;
  action: (
    id: string,
    path: string
  ) => Promise<_IApiResponse<void> | undefined | void>;
  path?: string;
}

interface _IBaseSignature {
  [key: string]:
    | string
    | string[]
    | number
    | boolean
    | ITEM_SEX_TYPE
    | ITEM_ZONE
    | null
    | undefined; // Flexible for other dynamic fields
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
    type IconType = React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
      } & React.RefAttributes<SVGSVGElement>
    >;

  type _TActionResult<T = unknown> =
    | {
        type: "success";
        message: string;
        data?: T; // Allow action-specific data in the result
      }
    | {
        type: "error";
        errors: Record<string, string[] | undefined>;
      }
    | { type: undefined; message: null; errors: null };
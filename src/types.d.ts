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

interface _IActionBtn {
  id: string;
  label: string;
  action: (
    id: string,
    path: string
  ) => Promise<_IApiResponse<void> | undefined | void>;
  path?: string;
}

interface _ITableSignature {
  [key: string]: string | string[] | number | boolean | null | undefined; // Flexible for other dynamic fields
}
interface _TableRowType extends _ITableSignature {
  _id: string; // Explicitly required
  image?: string; // Required for rendering the image
  description?: string;
}

interface _ITableBase<T = _TEntityType> {
  entityType: T;
  // deleteAction: (
  //   id: string,
  //   path: string
  // ) => Promise<_IApiResponse<void> | undefined | void>;
}

interface _ITableProps<T = _TableRowType[]> extends _ITableBase {
  query?: string;
  currentPage?: number;
  columnData: string[];
  data?: T;
  deleteAction: (
    id: string,
    path: string
  ) => Promise<_IApiResponse<void> | undefined | void>;
}

interface _ISpecificTableProps {
  query: string;
  currentPage: number;
  pageSize: number;
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

type _TVariants = "default" | "secondary" | "destructive" | "outline";

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

type _TEntityType = "project" | "task" | "client" | "team";

  type _TRefDivElement = React.HTMLAttributes<HTMLDivElement>;
  type _TRefImageElement = React.HTMLAttributes<HTMLImageElement>;
type _TRefPElement = React.HTMLAttributes<HTMLParagraphElement>;
  
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
  | { type: undefined; message: null, errors: null };
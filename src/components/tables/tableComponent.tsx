import * as React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableImageCell,
  TableHeader,
  TableCheckbox,
} from "@/components/ui/table"; // Import custom encapsulated components
import { EditBtn } from "./buttons";
import StatusBadge from "./status";
import NoContent from "../ui/noContent";
import { Typography } from "../ui/typography";
import {
  getDropdownStyles,
  getStringValue,
  getTableBooleanFields,
} from "@/utils/root.utils";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import FormModal from "./tableModal";
import { cn, useIsMobile } from "@/utils";
import { useLocation } from "react-router-dom";
import { AppFilters } from "..";
type SpecialFieldProps = {
  specialColumns: [string, string] | [string, string, string]; // Allow 2 or 3 fields
  specialFieldHeader: string; // Header for the special fields
};

// Reusable component for rendering the image cell
const TableImage = React.memo(
  ({
    src,
    desc,
    className,
  }: {
    src: string;
    desc: string;
    className?: string;
  }) => (
    <TableImageCell
      src={src}
      alt={desc || "user's avatar"}
      className={cn("", className)}
    />
  )
);
TableImage.displayName = "TableImage";

// Specialized rendering for when exactly 2 or 3 special fields are passed
const renderSpecialFields = (item: _TableRowType, specialColumns: string[]) => {
  return (
    <>
      {specialColumns.includes("image") && item.image && (
        <TableImage
          src={item.image ?? ""}
          desc={getStringValue(item[specialColumns[1]]!)}
        />
      )}

      <div className="flex flex-col">
        {specialColumns
          .filter((col) => col !== "image")
          .map((field, index) => (
            <Typography
              key={index}
              variant="span"
              className={`${
                index === 0
                  ? "font-semibold text-base"
                  : "text-sm dark:text-neutral-300"
              }`}
            >
              {item[field] ?? `Unknown ${field}`}
            </Typography>
          ))}
      </div>
    </>
  );
};

// Render other cell content based on the column type
const renderCell = (column: string, item: _TableRowType) => {
  const value = item[column];

  // Handle array of strings
  if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
    return (
      <Typography variant="span" className="text-base font-mono">
        {value.join(", ")} {/* Join array of strings with comma */}
      </Typography>
    );
  }

  switch (column) {
    case "image":
      return (
        <TableImage src={item.image ?? ""} desc={item.description ?? ""} />
      );
    default:
      return (
        <Typography variant="span" className="text-base font-mono">
          {value ?? "N/A"}
        </Typography>
      );
  }
};

// Button helper for edit and delete actions
const TableButtonHelper = React.memo(
  ({
    id,
    entityType,
    deleteAction,
    data
  }: {
    id: string;
    entityType: string;
    deleteAction?: (id: string, path: string) => Promise<any>;
    customRoute?: string;
    data?: any;
  }) => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
      <div className="flex items-center gap-2">
        <EditBtn href={`${pathname}/${id}`} />
        <FormModal
          entityType={entityType}
          type={"update"}
          data={data}
          id={id}
        />
        {deleteAction && (
          <FormModal
            entityType={entityType}
            type={"delete"}
            deleteAction={deleteAction}
            data={undefined}
            id={id}
          />
        )}
      </div>
    );
  }
);
TableButtonHelper.displayName = "TableButtonHelper";

// Main table component with bulk selection
const TableComponent = ({
  data,
  columnData,
  entityType,
  deleteAction,
  specialColumns,
  specialFieldHeader = "Info", // Default header for special fields
}: _ITableProps & Partial<SpecialFieldProps>) => {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
    new Set()
  );

  const renderSpecialFieldsHeader =
    specialColumns &&
    specialColumns?.length >= 2 &&
    specialColumns?.length <= 3;

  if (!data || data.length === 0) {
    return (
      <NoContent
        message="No data available"
        subMessage="Try adding new items or refreshing the page."
        onActionClick={() => console.log("Add New Item")}
        actionLabel="Add New Item"
      />
    );
  }

  const toggleRowSelection = (id: string) => {
    setSelectedRows((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(id)) {
        newSelection.delete(id);
      } else {
        newSelection.add(id);
      }
      return newSelection;
    });
  };

  // Handle "Select All" checkbox
  const toggleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set()); // Unselect all
    } else {
      const allIds = new Set(data.map((item) => item._id));
      setSelectedRows(allIds); // Select all
    }
  };

  const resolvedClassName = (extraClass?: string) =>
    cn(
      `px-6 ${
        renderSpecialFieldsHeader &&
        specialColumns &&
        specialColumns.includes("image")
          ? "py-2"
          : " py-4"
      }`,
      extraClass
    );

  const isMobile = useIsMobile();

  const filterStyles = getDropdownStyles(
    "-10rem",
    "100%",
    "-8rem",
    "1.5rem",
    isMobile
  );

  return (
    <>
      <TableHeader className="flex items-center justify-between mt-8 ">
        <Typography
          variant="h3"
          className="capitalize"
        >{`${entityType}s Table`}</Typography>
        <div className="flex items-center gap-2 self-end">
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-primary-foreground bg-neutral-400 dark:bg-zinc-500">
            <AppFilters filterStyles={filterStyles} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-primary-foreground bg-neutral-400 dark:bg-zinc-500">
            <ChevronUpDownIcon className="w-6 h-6" />
          </button>
          <FormModal
            entityType={entityType}
            type={"create"}
            data={undefined}
            id={undefined}
          />
        </div>
      </TableHeader>
      <div className="w-full overflow-x-auto hide-horizontal-scrollbar">
        <Table className="mt-8">
          <TableHead>
            <TableRow isHeader>
              <TableCell isHeader className="px-6">
                <input
                  type="checkbox"
                  id="check-all"
                  aria-label="check-all"
                  className="form-checkbox h-4 w-4"
                  checked={selectedRows.size === data.length}
                  onChange={toggleSelectAll}
                />
              </TableCell>

              {renderSpecialFieldsHeader && (
                <TableCell isHeader className="px-6 flex items-center gap-4">
                  {specialFieldHeader}
                </TableCell>
              )}

              {columnData.map((column, index) => (
                <TableCell key={`header-${index}`} isHeader className="px-6">
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => {
              const booleanFields = getTableBooleanFields(item); // Identify boolean fields
              const isSelected = selectedRows.has(item._id);

              return (
                <TableRow
                  key={`row-${item._id}`}
                  className="px-6 align-middle border-none text-xs whitespace-nowrap"
                >
                  <TableCell className={resolvedClassName()}>
                    <TableCheckbox
                      checked={isSelected}
                      id={item._id}
                      onChange={() => toggleRowSelection(item._id)}
                    />
                  </TableCell>

                  {/* Render specialized fields if criteria are met */}
                  {renderSpecialFieldsHeader && (
                    <TableCell
                      className={resolvedClassName("flex items-center gap-4")}
                    >
                      {renderSpecialFields(item, specialColumns)}
                    </TableCell>
                  )}

                  {columnData.map((column, columnIndex) => (
                    <TableCell
                      key={`cell-${columnIndex}`}
                      className={resolvedClassName()}
                    >
                      {booleanFields.includes(column) ? (
                        <StatusBadge status={item[column] as boolean} />
                      ) : (
                        renderCell(column, item)
                      )}
                    </TableCell>
                  ))}

                  <TableCell
                    className={resolvedClassName(
                      "flex justify-end items-center"
                    )}
                  >
                    <TableButtonHelper
                      id={item._id}
                      entityType={entityType}
                      deleteAction={deleteAction}
                      data={item}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default React.memo(TableComponent);

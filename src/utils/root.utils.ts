export const truncateMessage = (
  message: string,
  maxLength: number = 15
): string => {
  return message.length > maxLength
    ? message.slice(0, maxLength) + "..."
    : message;
};

export const getDropdownStyles = (
  mobileLeft: string,
  mobileTop: string,
  desktopLeft: string,
  desktopTop: string,
  isMobile: boolean
) =>
  isMobile
    ? { left: mobileLeft, top: mobileTop } // Mobile styles
    : { left: desktopLeft, top: desktopTop }; // Desktop styles

export const calculatePercentage = (total: number, item: number) => {
  if (total === 0) return "0"; // Prevent division by zero
  const percentage = (item / total) * 100;
  return percentage.toFixed(0); // Return the percentage as a whole number
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export const getRelativeTime = (date1: string, date2: string) => {
  if (date1.toLowerCase().trim() === date2.toLowerCase().trim()) {
    return undefined;
  }
  const newDate = new Date();
  const targetDate = new Date(date2);

  // Calculate the difference in milliseconds
  const diffInMs = newDate.getTime() - targetDate.getTime();

  // Convert differences to days, months, and years
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Convert ms to days
  const diffInMonths = Math.floor(diffInDays / 30); // Approximate months
  const diffInYears = Math.floor(diffInMonths / 12); // Approximate years

  if (diffInYears >= 1) {
    return diffInYears === 1 ? `last year` : `${diffInYears} years ago`;
  } else if (diffInMonths >= 3) {
    return `${diffInMonths} months ago`;
  } else {
    return diffInDays === 0
      ? `today`
      : diffInDays === 1
      ? "yesterday"
      : `${diffInDays} days ago`;
  }
};

export const getKeysExcludingField = <T extends object>(
  array: T[],
  trimField: keyof T
): Array<Exclude<keyof T, typeof trimField>> => {
  // Check if the array is not empty
  if (array.length === 0) {
    return []; // Return an empty array if the input array is empty
  }

  // Get keys from the first object and exclude the trimField
  const keys = Object.keys(array[0]).filter((key) => key !== trimField);

  return keys as Array<Exclude<keyof T, typeof trimField>>;
};

export function formatDate(dateString: string): string {
 const date = new Date(dateString); // Parse the string to a Date object
 const options: Intl.DateTimeFormatOptions = {
   day: "2-digit",
   month: "2-digit",
   year: "numeric",
 };

 const formatter = new Intl.DateTimeFormat("en-US", options);
 return formatter.format(date);
}

export function addSpaceBeforeCapitalLetters(input: string): string {
  return input.replace(/([A-Z])/g, " $1").trim();
}

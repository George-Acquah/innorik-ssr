const SearchSkeleton = ({ value}: { value?: string}) => {
  return (
    <div
      className={`animate-pulse h-12 rounded-full bg-white dark:bg-gray-700 w-full ${value ? 'bg-gray-50': ''}`}
    />
  );
};

export default SearchSkeleton;
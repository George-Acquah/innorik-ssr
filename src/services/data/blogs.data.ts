export const addBlogFields = (categories= ["Technology", "Lifestyle", "Travel", "Finance"]) => {
  return [
    {
      id: "title",
      label: "Title",
      placeholder: "Enter Blog Title",
      icon: "DocumentTextIcon",
      type: "text",
    },
    {
      id: "content",
      // label: "Content",
      placeholder: "Enter Blog Content",
      icon: "ClipboardDocumentCheckIcon",
      type: "quill",
    },
    {
      id: "tags",
      label: "Tags",
      placeholder: "Enter Tags (comma-separated)",
      icon: "TagIcon", // Replace with a suitable icon
      type: "text", // Consider using a tag input component for better user experience
    },
    {
      id: "category",
      label: "Category",
      placeholder: "Select a Category",
      icon: "TagIcon",
      type: "select",
      options: categories,
    },
    {
      id: "hidden",
      label: "Hidden Status",
      type: "radio",
      icon: "EyeOffIcon",
    
      radio: [
        {
          id: "verified",
          // checked: checked ?? false,
          value: "true",
          label: "Hidden",
        },
        {
          id: "unverified",
          // checked: checked ?? true,
          value: "false",
          label: "Visible",
        },
      ],
    }
  ] as _IDetail[];
};

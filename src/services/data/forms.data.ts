export const addProjectFields = (options: string[]) => {
  return [
    {
      id: "title",
      label: "Title",
      placeholder: "Enter Title",
      icon: "DocumentTextIcon",
      type: "text",
    },
    {
      id: "description",
      label: "Description",
      placeholder: "Enter Description",
      icon: "ClipboardListIcon",
      type: "textarea",
    },
    {
      id: "teamMembers",
      label: "Team Members",
      placeholder: "Add Team Members",
      icon: "UsersIcon",
      type: "select", // Assuming team members can be selected from options
      options: options, // Options could be a list of team members
    },
    {
      label: "Active Status",
      id: "isActive",
      type: "radio",
      input_type: "radio",
      radio: [
        {
          id: "active",
          checked: true,
          value: "true",
          label: "Active",
        },
        {
          id: "inactive",
          checked: false,
          value: "false",
          label: "Inactive",
        },
      ],
    },
  ] as _IDetail[];
};

export const addTeamFields = (options: string[]) => {
  return [
    {
      id: "name",
      label: "Team Name",
      placeholder: "Enter Team Name",
      icon: "UserGroupIcon",
      type: "text",
    },
    {
      id: "email",
      label: "Team Email",
      placeholder: "Enter Team Email",
      icon: "MailIcon",
      type: "email",
    },
    {
      id: "projects",
      label: "Projects",
      placeholder: "Select Projects",
      icon: "CollectionIcon",
      type: "select",
      options: options,
    },
    {
      id: "isActive",
      label: "Active Status",
      type: "radio",
      input_type: "radio",
      icon: "SwitchVerticalIcon",
      radio: [
        {
          id: "active",
          checked: true,
          value: "true",
          label: "Active",
        },
        {
          id: "inactive",
          checked: false,
          value: "false",
          label: "Inactive",
        },
      ],
    },
  ] as _IDetail[];
};


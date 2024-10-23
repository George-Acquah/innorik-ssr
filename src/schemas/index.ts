import * as z from "zod";

export const TeamsSchema = z.object({
  teamName: z.string().min(1, "Team Name is required"),
  creationDate: z.string().min(1, "Creation Date is required"),
  department: z.string().optional(),
  members: z.string().optional(),
});

export type TeamsFormInput = z.infer<typeof TeamsSchema>;

export const ProjectsFormInputSchema = z.object({
  title: z.string().min(1, "Project name is required"), // Require a non-empty string
  description: z.string().min(1, "Start date is required"), // Require a non-empty date string
  teamMembers: z.string().optional(), // Optional field for team members
  isActive: z.coerce.boolean()
});

export type ProjectsFormInput = z.infer<typeof ProjectsFormInputSchema>;

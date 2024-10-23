'use server';

import { ProjectsFormInputSchema } from "@/schemas";

export async function deleteEntity(id: string, path: string): Promise<void> {

  try {
    console.log(id, "delete mimiced", path);

    // Revalidate the cache for the specific path after deletion to ensure data is refreshed
  } catch (error) {
    console.error("Failed to delete entity:", error);
    throw new Error("Failed to delete entity");
  }
}

export const createAction = async (prevState: any, payload: FormData) => {
  const formData = Object.fromEntries(payload.entries());

  console.log(formData);
  try {
    const validatedFields = ProjectsFormInputSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        type: "error" as const,
        errors: validatedFields.error.flatten().fieldErrors,
      } satisfies _TActionResult;
    }

    return {
      type: "success" as const,
      message: 'Successful',
    } satisfies _TActionResult;
  } catch (err: any) {
    if (err.message === "NEXT_REDIRECT") {
      throw err; // Re-throw the redirect error
    } else {
      console.log(err);
    }
  }
};
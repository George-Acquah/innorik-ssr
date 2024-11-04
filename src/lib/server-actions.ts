"use server";

import { fetcher } from "./fetcher";
import { blogSchema } from "./schema";

export async function createBlog(
  _prevState: _TActionResult,
  payload: FormData
): Promise<_TActionResult | void> {
  try {
    const paylodObj = Object.fromEntries(payload.entries());
    const validatedFields = blogSchema
      .omit({ meta: true, comments: true, hidden: true, author: true })
      .safeParse(paylodObj);

    if (!validatedFields.success) {
      return {
        type: "error" as const,
        errors: validatedFields.error.flatten().fieldErrors,
      } satisfies _TActionResult;
    }

    const res = await fetcher<_IBlog>("api/blogs", {
      method: "POST",
      body: JSON.stringify({
        ...validatedFields.data, author: validatedFields.data.title
      })
    });

    return {
      message: `${res?.title} has been created successfully.`,
      type: "success",
    };
  } catch (err: any) {
    return {
      message: "User created successfully!",
      type: "success",
    };
  }
}

"use server";

export async function createBlog(prevState: _TActionResult, payload: FormData): Promise<_TActionResult> {
  const paylodObj = Object.fromEntries(payload.entries());
  console.log(prevState);
  console.log(paylodObj);

  try

  return { message: "User created successfully!", type: "success" };
}
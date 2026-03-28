"use server";

export async function fakeSubmit(prevState, formData) {
  const name = formData.get("name");

  if (!name) {
    return { message: "Name is required!" };
  }

  return { message: `Saved: ${name}` };
}

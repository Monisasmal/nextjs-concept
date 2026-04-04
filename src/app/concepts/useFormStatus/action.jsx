"use server";

export async function submitForm(formData) {
  const name = formData.get("name");

  if (!name) {
    return { message: "Name is required!" };
  }

  return { message: `Submitted: ${name}` };
}

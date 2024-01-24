"use server";

import { ContactFormType } from "../schemas";

export async function sendMail(data: ContactFormType) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({}), 6000);
  });
}

"use server";

import { render } from "@react-email/components";
import { ContactFormType } from "../schemas";
import { ContactEmail } from "@/emails/contact-email";
import nodemailer from "nodemailer";
import { headers } from "next/headers";

type EmailRequest = {
  from: string;
  subject: string;
  body: string;
};
const sendEmail = async (request: EmailRequest) => {
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    secure: process.env.SMTP_SECURE === "true",
  });

  await transport.sendMail({
    to: process.env.CONTACT_FORM_TO,
    subject: request.subject,
    from: request.from,
    html: request.body,
  });
};

export async function sendMailAction(data: ContactFormType) {
  const headerList = headers();

  const country = headerList.get("CF-IPCountry");
  const ip = headerList.get("CF-Connecting-IP");
  const ipv6 = headerList.get("CF-Connecting-IPv6");

  const email = render(
    ContactEmail({
      ...data,
      ip: ip ?? ipv6 ?? "none",
      country: country ?? "none",
    })
  );

  await sendEmail({
    from: data.email,
    subject: `[Contact Form Submission] ${data.subject}`,
    body: email,
  });
}

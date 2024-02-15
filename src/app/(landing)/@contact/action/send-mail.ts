'use server';

import { ContactEmail } from '@/emails/contact-email';
import { render } from 'jsx-email';
import { headers } from 'next/headers';
import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';
import { ContactModel } from '../schemas';

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
    secure: process.env.SMTP_SECURE === 'true',
  });

  await transport.sendMail({
    to: process.env.CONTACT_FORM_TO,
    subject: request.subject,
    from: process.env.CONTACT_FORM_FROM,
    replyTo: request.from,
    html: request.body,
  });
};

function cleanMessage(message: string) {
  message = message.replace(/\n/g, '<br/>');

  return sanitizeHtml(message, {
    allowedTags: ['br'],
  });
}

export async function sendMailAction(data: ContactModel) {
  const headerList = headers();

  const country =
    headerList.get('CF-IPCountry') ?? headerList.get('x-vercel-ip-country');

  const ip = headerList.get('CF-Connecting-IP') ?? headerList.get('x-real-ip');

  const email = await render(
    ContactEmail({
      ...data,
      message: cleanMessage(data.message),
      ip: ip ?? 'none',
      country: country ?? 'none',
    }),
  );

  await sendEmail({
    from: data.email,
    subject: `[Contact Form Submission] ${data.subject}`,
    body: email,
  });
}

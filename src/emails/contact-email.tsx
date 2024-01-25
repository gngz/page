import { ContactFormType } from "@/app/contact-form";
import {
  Img,
  Body,
  Text,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Hr,
} from "@react-email/components";
import * as React from "react";

type ContactEmailProps = ContactFormType & {
  ip: string;
  country: string;
};

export function ContactEmail(data: ContactEmailProps) {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>
        {" "}
        New contact form submission from {data.name} {"<"}
        {data.email}
        {">"}
      </Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2 pt-8">
          <Container className="border border-solid border-[#eaeaea] rounded-lg px-4 bg-zinc-50">
            <Img
              src="https://diogopassos.pt/logo.png"
              alt="Diogo Passos"
              className="my-0 mx-auto mt-6"
            />
            <Heading className="text-center font-light text-zinc-700 text-xl mt-8">
              Contact Form Submission
            </Heading>
            <Text>
              <span className="font-semibold">Name:</span> {data.name}
            </Text>
            <Text>
              <span className="font-semibold">E-mail:</span> {data.email}
            </Text>
            {data.phone && (
              <Text>
                <span className="font-semibold">Phone:</span> {data.phone}
              </Text>
            )}
            <Text>
              <span className="font-semibold">Subject:</span> {data.subject}
            </Text>
            <Text>
              <span className="font-semibold">Message:</span>
            </Text>
            <Text dangerouslySetInnerHTML={{ __html: data.message }} />
            <Hr className="border border-solid border-[#eaeaea] mt-6 mb-4 mx-0 w-full" />
            <Text className="mt-4 text-sm text-center text-zinc-600">
              This message is sent from the website contact form (IP: {data.ip}{" "}
              - Country: {data.country})
            </Text>
          </Container>
          <Text className="mt-4 text-sm text-center text-zinc-500">
            &copy; Diogo Passos - All Rights Reserverd -{" "}
            {new Date().getFullYear()}
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
}

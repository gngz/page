import { ContactModel } from '@/app/(landing)/@contact/schemas';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Tailwind,
  Text,
} from 'jsx-email';

type ContactEmailProps = ContactModel & {
  ip: string;
  country: string;
};

export function ContactEmail(data: ContactEmailProps) {
  return (
    <Html>
      <Head>
        <meta name='color-scheme' content='light' />
        <meta name='supported-color-schemes' content='light' />
      </Head>
      <Preview>
        {' '}
        New contact form submission from {data.name} {'<'}
        {data.email}
        {'>'}
      </Preview>
      <Tailwind>
        <Body className='mx-auto my-auto bg-white px-2 pt-8 font-sans'>
          <Container className='rounded-lg border border-solid border-[#eaeaea] bg-zinc-50 px-4'>
            <Img
              src='https://diogopassos.pt/logo.png'
              alt='Diogo Passos'
              className='mx-auto my-0 mt-6'
            />
            <Heading className='mt-8 text-center text-xl font-light text-zinc-700'>
              Contact Form Submission
            </Heading>
            <Text>
              <span className='font-semibold'>Name:</span> {data.name}
            </Text>
            <Text>
              <span className='font-semibold'>E-mail:</span> {data.email}
            </Text>
            {data.phone && (
              <Text>
                <span className='font-semibold'>Phone:</span>{' '}
                {data.phone.internationalNumber}
              </Text>
            )}
            <Text>
              <span className='font-semibold'>Subject:</span> {data.subject}
            </Text>
            <Text>
              <span className='font-semibold'>Message:</span>
            </Text>
            <Text dangerouslySetInnerHTML={{ __html: data.message }} />
            <Hr className='mx-0 mb-4 mt-6 w-full border border-solid border-[#eaeaea]' />
            <Text className='mt-4 text-center text-sm text-zinc-600'>
              This message is sent from the website contact form (IP: {data.ip}{' '}
              - Country: {data.country})
            </Text>
          </Container>
          <Text className='mt-4 text-center text-sm text-zinc-500'>
            &copy; Diogo Passos - All Rights Reserverd -{' '}
            {new Date().getFullYear()}
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
}

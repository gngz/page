"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormSchema, ContactFormType } from "./schemas";
import { FaSpinner } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMailAction } from "./action/send-mail";
import { toast } from "@/components/ui/use-toast";

const RequiredSign = () => {
  return <span className="text-red-600">*</span>;
};

const ErrorMessage = ({ message }: { message?: string }) => {
  return message ? <p className="text-red-600 mt-1">{message}</p> : undefined;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid, isSubmitting, errors },
  } = useForm<ContactFormType>({
    mode: "onTouched",
    resolver: zodResolver(ContactFormSchema),
  });

  const isLoading = isSubmitting;
  const canSubmit = isDirty && isValid;

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    try {
      await sendMailAction(data);
      toast({
        title: "Contact Form Submitted",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      reset();
    }
  };

  return (
    <Card className="w-full md:w-2/4 mx-auto">
      <CardHeader>
        <CardTitle>Contact-me</CardTitle>
        <CardDescription>Feel free to reach me out.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="contact-form"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="md:col-span-2">
            <Label>
              Name
              <RequiredSign />
            </Label>
            <Input type="text" {...register("name")} />
            <ErrorMessage message={errors.name?.message} />
          </div>
          <div className="">
            <Label>
              E-mail
              <RequiredSign />
            </Label>
            <Input type="email" {...register("email")} />
            <ErrorMessage message={errors.email?.message} />
          </div>
          <div className="">
            <Label>Phone Number</Label>
            <Input type="tel" {...register("phone")} />
            <ErrorMessage message={errors.phone?.message} />
          </div>
          <div className="md:col-span-2">
            <Label>
              Subject
              <RequiredSign />
            </Label>
            <Input type="text" {...register("subject")} />
            <ErrorMessage message={errors.subject?.message} />
          </div>
          <div className="md:col-span-2">
            <Label>
              Message
              <RequiredSign />
            </Label>
            <Textarea {...register("message")} />
            <ErrorMessage message={errors.message?.message} />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          className="ml-auto"
          disabled={isLoading || !canSubmit}
          type="submit"
          form="contact-form"
        >
          {isLoading && <FaSpinner className="mr-2 h-4 w-4 animate-spin" />}
          Send
        </Button>
      </CardFooter>
    </Card>
  );
}

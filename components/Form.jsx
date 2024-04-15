"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
const Form = () => {
  return (
    // Now using formspree here .. before i used getform.io  ( please dont copy my form action link.. it wont work for you)
    <form
      className="flex flex-col gap-y-4"
      action="https://formspree.io/f/mdoqpvza"
      method="POST"
    >
      {/* input  */}
      <div className="relative flex items-center">
        <Input type="name" id="name" name="name" placeholder="Nombre" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input  */}
      <div className="relative flex items-center">
        <Input type="email" id="email" name="email" placeholder="Correo Electronico" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input  */}
      <div className="relative flex items-center">
        <Textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje aquí."
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Hablemos <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;

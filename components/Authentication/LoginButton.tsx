"use client";

import FilledButton from "@/components/UI/Button/FilledButton";
import { useFormStatus } from "react-dom";

const LoginButton = ({ children }: { children: string }) => {
  const { pending } = useFormStatus();
  return (
    <FilledButton disabled={pending}>
      {pending ? "Submitting" : children}
    </FilledButton>
  );
};

export default LoginButton;

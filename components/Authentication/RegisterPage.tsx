"use client";
import { useFormState } from "react-dom";

import InputText from "@/components/UI/Input/InputText";
import FilledButton from "@/components/UI/Button/FilledButton";

import { login, PrevStateSignup, signup } from "@/actions/auth-actions";
import { useState } from "react";
import LoginButton from "@/components/Authentication/LoginButton";

const LoginPage = () => {
  const [registerFormState, registerFormAction] = useFormState(signup, {
    errors: null,
  } as PrevStateSignup);

  console.log(registerFormState);
  //todo upload profile picture

  return (
    <div className={"h-screen flex items-center justify-center"}>
      <form
        action={registerFormAction}
        className={
          "flex flex-col p-4 border-2 rounded-2xl border-black dark:border-white"
        }
      >
        <h2 className={"text-2xl text-left my-2"}>User Authentication</h2>
        <InputText id={"userId"} label={"Enter your ID:"} className={"w-80"} />
        <InputText
          id={"userName"}
          label={"Enter your full name:"}
          className={"w-80"}
        />
        <InputText
          id={"email"}
          label={"Enter your email:"}
          className={"w-80"}
        />
        <InputText
          id={"password"}
          label={"Enter your password:"}
          type={"password"}
          className={"w-80"}
        />
        <InputText
          id={"secondPassword"}
          label={"Repeat your password:"}
          type={"password"}
          className={"w-80"}
        />
        <ul>
          {registerFormState.errors &&
            Object.keys(registerFormState.errors!).map((error) => (
              <li key={error}>{registerFormState.errors![error]}</li>
            ))}
        </ul>
        <div className={"flex"}>
          <LoginButton>Register</LoginButton>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

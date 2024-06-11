"use client";
import { useFormState } from "react-dom";

import InputText from "@/components/UI/Input/InputText";

import { PrevStateSignup, signup } from "@/actions/auth-actions";
import LoginButton from "@/components/Authentication/LoginButton";

const RegisterPage = () => {
  const [registerFormState, registerFormAction] = useFormState(signup, {
    errors: null,
  } as PrevStateSignup);

  //todo upload profile picture

  return (
    <form action={registerFormAction} className={"flex flex-col p-4"}>
      <InputText id={"userId"} label={"Enter your ID:"} className={"w-80"} />
      <InputText
        id={"userName"}
        label={"Enter your full name:"}
        className={"w-80"}
      />
      <InputText id={"email"} label={"Enter your email:"} className={"w-80"} />
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
  );
};

export default RegisterPage;

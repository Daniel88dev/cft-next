"use client";
import { useFormState, useFormStatus } from "react-dom";

import InputText from "@/components/UI/Input/InputText";
import FilledButton from "@/components/UI/Button/FilledButton";

import { login, PrevStateLogin } from "@/actions/auth-actions";
import LoginButton from "@/components/Authentication/LoginButton";

const LoginPage = () => {
  const [loginFormState, loginFormAction] = useFormState(login, {
    errors: null,
  } as PrevStateLogin);

  return (
    <div className={"h-screen flex items-center justify-center"}>
      <form
        action={loginFormAction}
        className={
          "flex flex-col p-4 border-2 rounded-2xl border-black dark:border-white"
        }
      >
        <h2 className={"text-2xl text-left my-2"}>User Authentication</h2>
        <InputText id={"userId"} label={"Enter your ID:"} className={"w-80"} />
        <InputText
          id={"password"}
          label={"Enter your password:"}
          type={"password"}
          className={"w-80"}
        />
        <ul>
          {loginFormState.errors &&
            Object.keys(loginFormState.errors!).map((error) => (
              <li key={error}>{loginFormState.errors![error]}</li>
            ))}
        </ul>
        <div className={"flex"}>
          <LoginButton>Login</LoginButton>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

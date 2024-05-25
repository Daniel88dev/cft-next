"use client";
import { useFormState } from "react-dom";

import InputText from "@/components/UI/Input/InputText";

import { login, PrevStateLogin } from "@/actions/auth-actions";
import LoginButton from "@/components/Authentication/LoginButton";

const LoginPage = () => {
  const [loginFormState, loginFormAction] = useFormState(login, {
    errors: null,
  } as PrevStateLogin);

  return (
    <form action={loginFormAction} className={"z-20 flex flex-col p-4"}>
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
  );
};

export default LoginPage;

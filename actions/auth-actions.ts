"use server";

import { createUser, getUserByUserId } from "@/lib/user";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createAuthSession, destroySession, verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export type PrevStateSignup = {
  errors: null | {
    [key: string]: string | undefined;
  };
};
export const signup = async (
  prevState: PrevStateSignup,
  formData: FormData
) => {
  const userId = formData.get("userId") as string;
  const password = formData.get("password") as string;
  const secondPassword = formData.get("secondPassword") as string;
  const email = formData.get("email") as string;
  const userName = formData.get("userName") as string;

  let errors: {
    email?: string;
    userId?: string;
    password?: string;
    passwordDuplicity?: string;
    userName?: string;
  } = {};

  if (!email.includes("@hyundai-motor.cz")) {
    errors.email = "Valid E-mail address with @hyundai-motor.cz is required.";
  }

  if (password !== secondPassword) {
    errors.passwordDuplicity = "Both passwords needs to match.";
  }

  if (password.length < 5) {
    errors.password = "Password must be at least 5 characters";
  }

  if (userName.trim().length < 5) {
    errors.userName = "User name must be at least 5 characters";
  }

  if (!userId.includes("181") && userId.length !== 8) {
    errors.userId =
      "User ID must start with 181, and needs to have 8 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);

  try {
    const id = await createUser(userId, userName, email, hashedPassword);
    await createAuthSession(id);
  } catch (error) {
    return {
      errors: {
        error: "Could not register new user. Contact administrator.",
      },
    };
    throw error;
  }
  redirect("/");
};

export type PrevStateLogin = {
  errors: null | {
    [key: string]: string | undefined;
  };
};

export async function login(prevState: PrevStateLogin, formData: FormData) {
  const userId = formData.get("userId");
  const password = formData.get("password");

  const existingUser = await getUserByUserId(Number(userId));

  if (!existingUser) {
    return {
      errors: {
        userId: "Could not authenticate user, please check your credentials.",
      },
    };
  }

  const isValidPassword = verifyPassword(
    existingUser.password,
    password as string
  );

  if (!isValidPassword) {
    return {
      errors: {
        email: "Invalid password",
      },
    };
  }

  await createAuthSession(existingUser.id);
  redirect("/");

  return {
    errors: null,
  };
}

export async function logout() {
  await destroySession();
  redirect("/");
}

export async function checkUser() {
  const user = await verifyAuth();
  if (!user.user) {
    return redirect("/");
  }
  return null;
}

"use server";

import { WelcomePage } from "@/components/WelcomePage/WelcomePage";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await verifyAuth();
  console.log(user);

  if (user.user) {
    redirect("/home");
  }

  return <WelcomePage />;
}

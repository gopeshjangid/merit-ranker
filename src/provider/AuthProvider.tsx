"use client"

// import { Authenticator } from "@aws-amplify/ui-react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
 // return <Authenticator hideSignUp loginMechanisms={['email']} socialProviders={['google']}  className="flex justify-center w-full h-screen bg-darkBlue shadow-2xl">{children}</Authenticator>;
}
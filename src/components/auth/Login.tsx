"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function Login({ user }: { user?: AuthUser }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (user) {
      console.log(user);
      
      // Get the redirect path from URL params
      const redirectPath = searchParams.get("redirect");
      
      // Validate redirect path to prevent open redirect vulnerabilities
      if (redirectPath && redirectPath.startsWith("/") && !redirectPath.startsWith("//")) {
        router.push(redirectPath);
      } else {
        // Default to home if no valid redirect
        router.push("/");
      }
    }
  }, [user, router, searchParams]);

  return null;
}

export default withAuthenticator(Login, {
  hideSignUp: true,
  socialProviders: ["google"],
  variation: "modal",
});
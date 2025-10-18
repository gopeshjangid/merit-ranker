"use client";

import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useUserStore } from "@/states/user-state";

export default function Logout() {
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        await signOut();
        useUserStore.getState().clearUser();
        router.push("/login");
      }}
      variant="outline"
      size="sm"
      className="ml-2"
    >
      <LogOut className="h-4 w-4 mr-1" />
      Sign out
    </Button>
  );
}
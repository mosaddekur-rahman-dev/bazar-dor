"use client";

import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import Image from "next/image";

function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Successfully signed out");
  };
  if (isPending) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted">Loading...</span>
      </div>
    );
  }
  return (
    <div className="flex gap-2 justify-center items-center text-center mt-15 mb-50">
      <div className="avatar">
        <div className="w-200">
          <img
            alt="Tailwind-CSS-Avatar-component"
            src={user?.image}
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

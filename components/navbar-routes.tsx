"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

import Link from "next/link";

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacher = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isPlayerPage || isTeacher ? (
        <Link href="/">
          <Button size="sm" variant="ghost" className=" mr-4">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href={"/teacher/courses"}>
          <Button size="sm" variant="ghost" className=" mr-4">
            Teacher mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarRoutes;

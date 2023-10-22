"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export const Heading = () => {
  const { isLoading } = useConvexAuth();
  const { isSignedIn } = useAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl">
        Youre Ideas,Documents & Plans ,Unified.Welcome to{" "}
        <span className="underline">Note Junction</span>
      </h1>
      <h3>
        Note Junction is the connected workspace where <br />
        Better,Faster work happens
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isSignedIn && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Note Junction
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isSignedIn && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get NJ free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

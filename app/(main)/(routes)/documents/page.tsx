"use client";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

const DocumentedPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const router = useRouter();

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a new Note",
      success: "New note Created",
      error: "Failed to create note",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className=" hidden dark:block"
      />
      <h2 className="font-medium text-lg">
        Welcome to {user?.firstName}&apos;s Note Junction
      </h2>
      <Button onClick={onCreate} className="mt-2">
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a Note
      </Button>
    </div>
  );
};

export default DocumentedPage;

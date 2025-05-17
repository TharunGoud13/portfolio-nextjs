"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DocumentViewer } from "react-documents";

export default function Resume() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center w-full">
      <div className="flex mt-5 mb-2">
        <Link href="/">
          <Button>Go Back</Button>
        </Link>
      </div>
      <DocumentViewer
        className="bg-primary"
        queryParams="hl=Nl"
        url="https://q9t3vupjt7xcylpm.public.blob.vercel-storage.com/Tharun%20Goud-Resume-ntw1Rz0XeNboFnVvstOG01h5X27hFz.pdf"
      />
    </div>
  );
}

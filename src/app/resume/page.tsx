"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DocumentViewer } from "react-documents";

export default function Resume() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-background px-2 py-6 sm:px-4">
      <div className="w-full max-w-2xl flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Resume</h1>
        <Link href="/" aria-label="Go Back Home">
          <Button
            aria-label="Go Back"
            tabIndex={0}
            className="focus-visible:ring-2"
          >
            Go Back
          </Button>
        </Link>
      </div>
      <div className="w-full max-w-3xl flex-1 flex flex-col items-center justify-center">
        <div className="w-full rounded-lg shadow-lg border border-border bg-card p-2 sm:p-4 flex flex-col items-center">
          <DocumentViewer
            className="w-full min-h-[80vh] max-h-[80vh] rounded-md bg-background"
            queryParams="hl=Nl"
            url="https://q9t3vupjt7xcylpm.public.blob.vercel-storage.com/Tharun%20Goud-Resume-qLDReBuSNEV1vGArS4AoKD0gMbd7cR.pdf"
          />
        </div>
      </div>
    </div>
  );
}

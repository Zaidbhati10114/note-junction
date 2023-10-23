import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const PdfView = () => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Youre PDfs</AlertTitle>
      <AlertDescription>You can add by clicking add button</AlertDescription>
    </Alert>
  );
};

export default PdfView;

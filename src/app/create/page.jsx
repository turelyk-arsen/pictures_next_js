"use client";
import React from "react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";

Amplify.configure({
  ...awsconfig,
  ssr: true,
});

const Create = () => {
  return (
    <div>
      <StorageManager
        accessLevel="public"
        acceptedFileType={["image/*"]}
        maxFileCount={5}
      />
    </div>
  );
};

export default Create;

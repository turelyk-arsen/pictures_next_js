"use client";
import React from "react";
import { StorageManager } from "@aws-amplify/ui-react-storage";

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

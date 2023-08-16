"use client";
import React from "react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Amplify, DataStore } from "aws-amplify";
import awsconfig from "@/aws-exports";
import {
  Button,
  Flex,
  TextField,
  withAuthenticator,
  Authenticator,
  CheckboxField,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import { POST } from "@/models";
import "@aws-amplify/ui-react/styles.css";
import { AccountSettings, Card, Heading } from "@aws-amplify/ui-react";

Amplify.configure({
  ...awsconfig,
  ssr: true,
});

const Create = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [files, setFiles] = React.useState({});

  const router = useRouter();

  const handleSuccess = () => {
    alert("password is successfully changed!");
  };
  const handleDelete = () => {
    alert("user has been successfully deleted");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, body, files });
    DataStore.save(
      new POST({
        title,
        body,
        image: Object.keys(files),
      })
    ).then(() => {
      router.push("/portfolio");
    });
  };

  return (
    <div>
      <Authenticator
        socialProviders={["google"]}
        signUpAttributes={["name", "email"]}
      >
        {({ user }) => (
          <main>
            {user ? (
              <>
                <Card width="300px">
                  <Heading>Change Password:</Heading>
                  <AccountSettings.ChangePassword onSuccess={handleSuccess} />
                  <Heading>Delete Account:</Heading>
                  <AccountSettings.DeleteUser onSuccess={handleDelete} />
                </Card>
                
                <Flex
                  as="form"
                  width="500px"
                  direction="column"
                  onSubmit={handleSubmit}
                >
                  <Heading>Add pictures:</Heading>
                  <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <TextField
                    label="Description"
                    value={body}
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                  />

                  <StorageManager
                    accessLevel="public"
                    acceptedFileType={["image/*"]}
                    maxFileCount={5}
                    onUploadSuccess={({ key = "" }) => {
                      setFiles((prevFiles) => {
                        return {
                          ...prevFiles,
                          [key]: true,
                        };
                      });
                    }}
                  />
                  <Button type="submit">Submit</Button>
                </Flex>{" "}
              </>
            ) : null}
          </main>
        )}
      </Authenticator>
    </div>
  );
};

export default Create;

"use client";
import React from "react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Amplify, DataStore } from "aws-amplify";
import awsconfig from "@/aws-exports";
import { Button, Flex, TextField, withAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import { POST } from "@/models";
import '@aws-amplify/ui-react/styles.css'


Amplify.configure({
  ...awsconfig,
  ssr: true,
});

const Create = () => {
    const [title, setTitle] = React.useState('')
    const [body, setBody] = React.useState('')
    const [files, setFiles] = React.useState({})

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({title, body, files});
        DataStore.save(
            new POST ({
                title,
                body,
                image: Object.keys(files)
            })
        ).then(() => {
            router.push('/')
        })
        
    }
  return (
    <div>
        <Flex as='form' direction='column' onSubmit={handleSubmit}>
        <TextField label='Title' value={title} onChange={e => {setTitle(e.target.value)}}/>
        <TextField label='Description' value={body} onChange={e => {setBody(e.target.value)}}/>
        
      <StorageManager
        accessLevel="public"
        acceptedFileType={["image/*"]}
        maxFileCount={5}
        onUploadSuccess={({ key = ''}) => {
            setFiles((prevFiles) => {
                return {
                    ...prevFiles,
                    [key]: true
                }
            })
        }}
      />
      <Button type='submit'>Submit</Button>
      </Flex>
    </div>
  );
};

export default withAuthenticator(Create);

"use client";
import React from "react";
import { POST } from "@/models";
import { DataStore, Predicates } from "aws-amplify";
import { Grid, Button } from "@aws-amplify/ui-react";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";

const Portfolio = () => {
  // const [posts, setPosts] = React.useState<Array<POST>>([])
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const sub = DataStore.observeQuery(POST, Predicates.ALL, {
      sort: (post) => post.updatedAt("DESCENDING"),
    }).subscribe((snapshot) => {
      const { items } = snapshot;
      setPosts(items);
    });
    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <div>
      {posts.map((post) => {
        const handleDelete = async () => {
          const toDelete = await DataStore.query(POST, post.id);
          await DataStore.delete(toDelete);
        };
        return (
          <div key={post.id}>


            <Grid gap="small" templateColumns="repeat(1, 1fr)">
                          <p>{post.title}</p>
            <p>{post.body}</p>
              {post.image?.map((img, i) => (
                <>
                  <StorageImage
                    alt={img}
                    imgKey={img}
                    key={i}
                    accessLevel="public"
                  />
                </>
              ))}
              <Button
                variation="primary"
                colorTheme="info"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;

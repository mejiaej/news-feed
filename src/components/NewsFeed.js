import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./Post";
import { getPosts } from "../fetch/Fetch";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}));

const NewsFeed = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsResult = await getPosts();
      setPosts(postsResult);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      {posts.map(({ id, title, body }) => (
        <Post id={id} title={title} body={body} />
      ))}
    </div>
  );
};

export default NewsFeed;

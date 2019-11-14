import React, { useEffect, useState } from "react";
import { getComments } from "../fetch/Fetch";
import { Collapse, CardContent, List, Divider } from "@material-ui/core";
import Comment from "./Comment";

const Comments = ({ postId, expanded }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const commentsResult = await getComments({ postId });
      setComments(commentsResult);
    };
    if (expanded) {
      fetchData();
    }
  }, [postId, expanded]);

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <List>
          {comments.map(({ name, email, body }) => (
            <>
              <Comment
                name={name}
                email={email}
                body={body}
              />
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </CardContent>
    </Collapse>
  );
};

export default Comments;

import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { getComments } from "../fetch/Fetch";
import { Collapse, CardContent, List, Divider } from "@material-ui/core";
import Comment from "./Comment";

const Comments = ({ postId, expanded }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // get the comments from the API according to the postId
    const fetchData = async () => {
      const commentsResult = await getComments({ postId });
      setComments(commentsResult);
    };
    // only fetch data if expanded
    if (expanded) {
      fetchData();
    }
  }, [postId, expanded]);

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <List>
          {comments.map(({ id, name, email, body }) => (
            <Fragment key={id}>
              <Comment name={name} email={email} body={body} />
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
        </List>
      </CardContent>
    </Collapse>
  );
};

Comments.propTypes = {
  postId: PropTypes.number.isRequired,
  expanded: PropTypes.bool.isRequired
};

export default Comments;

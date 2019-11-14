import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const Comment = ({ name, email, body}) => (
  <ListItem alignItems="flex-start">
    <ListItemText
      primary={`${name} - ${email}`}
      secondary={
        <>
          {body}
        </>
      }
    />
  </ListItem>
);

export default Comment;
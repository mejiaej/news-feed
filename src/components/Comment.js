import React from 'react';
import PropTypes from 'prop-types';
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

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Comment;
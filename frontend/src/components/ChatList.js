import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';

const ChatList = ({ chat }) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <List>
          <ListItem>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary={chat.chat_room_id} />
            <ListItemText primary={chat.creat_date} />
          </ListItem>
        </List>
      </Grid>
    </>
  );
};

export default ChatList;

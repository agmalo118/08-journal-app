
import { Grid, ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { useMemo } from 'react';
import { setActiveNote } from '../../store/journal/journalSlice';
import { useDispatch } from 'react-redux';

export const SideBarItem = ({ title = '', body = '', id, date, imageUrls = [] }) => {

  const dispatch = useDispatch();

  const newTitle = useMemo(() => {
    return title.length > 17
      ? title.substring(0, 17) + '...'
      : title;
  }, [title]);

  const newBody = useMemo(() => {
    return body.length > 17
      ? body.substring(0, 17) + '...'
      : body;
  }, [body]);

  const onSetActiveNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  return (
    <ListItem
      onClick={onSetActiveNote}
      disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>

        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}

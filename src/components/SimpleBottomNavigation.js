import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import StarRateIcon from '@mui/icons-material/StarRate';
import DarkModeSwitch from './DarkModeSwitch'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation sx={{ position: 'fixed', bottom: 0, width: 1.0 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Books I've Read" icon={<MarkChatReadIcon />} />
        <BottomNavigationAction label="Favorite Books" icon={<StarRateIcon />} />
        <BottomNavigationAction label="Wish List" icon={<BookmarksIcon />} />
        <DarkModeSwitch/>
      </BottomNavigation>
    </Box>
  
  );
}

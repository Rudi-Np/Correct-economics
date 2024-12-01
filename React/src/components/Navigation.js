
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const [open, setOpen] = React.useState(false);
    const [anchor, setAnchor] = React.useState('left');
    const navigate = useNavigate();


    const toggleDrawer = (newOpen, newAnchor) => () => {
      setOpen(newOpen);
      setAnchor(newAnchor);
    //   if (newAnchor === 'left') {
    //     navigate('/updateExpense'); // Redirect to 'update2' if the drawer is opened from the left
    // } else if (newAnchor === 'right') {
    //   navigate('/updateRevenue'); // Redirect to 'update1' if the drawer is opened from the right
    // }
    };
  
    const DrawerList = (
      <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:'200px' }} role="presentation" onClick={toggleDrawer(false)}>
        <List >
          {['Update'].map((text, index) => (
            <ListItem key={text} disablePadding>
              
              <ListItemButton component={Link} to="/updateExpense">
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ fontSize: '20px' }} /> {/* Increase font size */}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <br></br>
        <br></br>
        <List>
          {['Tracking'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to="/tracking">
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ fontSize: '20px' }} /> {/* Increase font size */}
              </ListItemButton >
            </ListItem>
          ))}
        </List>
      </Box>
    );
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Button  sx={{ width: '300px', height: '150px',backgroundColor: 'blue',color:'white', margin: '10px' }} onClick={toggleDrawer(true, 'left')}>Expense</Button>
          <br></br>
          <Button sx={{ width: '300px', height: '150px',backgroundColor: 'blue',color:'white', margin: '10px' }} onClick={toggleDrawer(true, 'right')}>Revenue</Button>
          <Drawer open={open} onClose={toggleDrawer(false)} anchor={anchor}>
              {DrawerList}
          </Drawer>
      </div>
  );



}
export default Navigation;
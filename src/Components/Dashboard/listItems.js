import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountTree from '@material-ui/icons/AccountTree';
import Category from '@material-ui/icons/Category';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import LockOpen from '@material-ui/icons/LockOpen';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
export default function ListItems() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return(
  <div>
    <ListItemLink href="/#dashboard" selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" disabled={true}/>
    </ListItemLink>
    <ListItemLink href="/#standardization" selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
      <ListItemIcon>
        <AccountTree />
      </ListItemIcon>
      <ListItemText primary="Map to Source" />
    </ListItemLink>
    <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Category />
        </ListItemIcon>
        <ListItemText primary="Rules" />
        {!open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemLink href="/#rules/1" className={classes.nested} selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
            <ListItemIcon>
              <Category />
            </ListItemIcon>
            <ListItemText primary="Rule 1" />
          </ListItemLink>
          <ListItemLink href="/#rules/2" className={classes.nested} selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
            <ListItemIcon>
              <Category />
            </ListItemIcon>
            <ListItemText primary="Rule 2" />
          </ListItemLink>
        </List>
      </Collapse>
      <ListItemLink href="/#execution" selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Execution" />
    </ListItemLink>
    <ListItemLink href="/#reviewMatches" selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Review matches" />
    </ListItemLink>
  </div>
  )};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end" />
    </ListItem>
  </div>
);


export const dummyLinks = (
    <div>
        <ListSubheader inset>Temporary Link</ListSubheader>
        <ListItemLink href="/#signin">
      <ListItemIcon>
        <AssignmentInd />
      </ListItemIcon>
      <ListItemText primary="Sign In" />
    </ListItemLink>
    <ListItemLink href="/#signup">
      <ListItemIcon>
        <LockOpen />
      </ListItemIcon>
      <ListItemText primary="Sign Up" />
    </ListItemLink  >
    </div>
)
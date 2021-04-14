import { makeStyles } from '@material-ui/core/styles';
import React , {useState} from 'react';
import photo from './profile_photo.png';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import InboxIcon from '@material-ui/icons/Inbox';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
function App(){
  const classes = useStyles();
  const [requests, setRequests] = useState(false);
  const [users, setUsers] = useState(false);
  const [orders, setOrders] = useState(false);
  const handleRequests = () => {
  if (requests) {
    setRequests(false);
  }
  else {
    setRequests(true);
  }
}
  const handleUsers = () => {
    if (users) {
      setUsers(false);
    }
    else {
      setUsers(true);
    }
  }
  const handleOrders = () => {
    if (orders) {
      setOrders(false);
    }
    else {
      setOrders(true);
    }
  }
  return (
      <div className={classes.container}>
        <div className={classes.card} >
          <span className={classes.title}>xo.</span>
          <div className={classes.rowContainer}>
             <img src={photo}/> 
             <div className={classes.nameContainer}>
             <span>Ahmed Reda</span>
             <span className={classes.id}>#1253724</span>
             </div>
          </div>
          <div className={classes.rowContainer}>
            <DashboardIcon/>
            <span style={{marginLeft: 20}}>Dashboard</span>
          </div>
          <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleRequests}>
            <ViewAgendaIcon/>
            <span style={{marginLeft: 20}}>Requests</span>
            </div>
            {requests && 
                <div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon/>
                  </div>
                  <span>Pending</span>
                </div>
                <div className={classes.subRow}>
                <RadioButtonUncheckedIcon/>
                <span>Confirmed</span>
              </div>
              <div style={{marginTop: 20}}>
              <span style={{marginLeft: 50}}>All Requests</span>
              </div>
              </div>
            }
          <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleUsers}>
            <PersonOutlineIcon/>
            <span style={{marginLeft: 20}}>Users</span>
            </div>
            {users &&
              <div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon/>
                  </div>
                  <span>Customers</span>
                </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon/>
                  </div>
                  <span>Admins</span>
                </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon/>
                  </div>
                  <span>Ordering</span>
                </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon/>
                  </div>
                  <span>WareHouse</span>
                </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon/>
                  </div>
                  <span>Accounting</span>
                </div>
              </div>
            }
             <div className={classes.rowContainer} style={{cursor: 'pointer'}}>
            <InboxIcon/>
            <span style={{marginLeft: 20}}>Boxes</span>
            </div>
            <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleOrders}>
            <ChatBubbleIcon/>
            <span style={{marginLeft: 20}}>Orders</span>
            </div>
            {
              orders &&
              <div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon/>
                  </div>
                  <span>Pending</span>
                </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon/>
                  </div>
                  <span>Confirmed</span>
                </div>
                <div style={{marginTop: 20}}>
              <span style={{marginLeft: 50}}>All Orders</span>
              </div>
              </div>
            }
            <div style={{ borderBottom: '1px solid #EBEFF2', marginTop:50}}/>
            <div className={classes.rowContainer} style={{cursor: 'pointer'}}>
            <MoreHorizIcon/>
            <span style={{marginLeft: 20}}>Settings</span>
            </div>
            <div className={classes.rowContainer} style={{cursor: 'pointer'}}>
            <PowerSettingsNewIcon/>
            <span style={{marginLeft: 20, color: '#C2CFE0'}}>Logout</span>
            </div>
          </div>
      </div>
  );
}
const useStyles = makeStyles({
  container: {
    backgroundColor: 'white',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    width: 256,
    height: 1050,
  },
  title: {
    color: '#0A47C4',
    marginLeft: '24px',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  rowContainer: {
    display: 'flex',
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
  },
  subRow : {
    display: 'flex',
    marginLeft: 30,
    marginTop: 20,
    flexDirection: 'row',
  },
  id: {
    color: '#90A0B7',
  },
  nameContainer: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
  },
});
export default App;

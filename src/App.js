import { makeStyles } from '@material-ui/core/styles';
import React , {useState} from 'react';
import photo from './profile_photo.png';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import InboxIcon from '@material-ui/icons/Inbox';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Requests from './Requests';
function App(){
  const classes = useStyles();
  const [requests, setRequests] = useState(false);
  const [users, setUsers] = useState(false);
  const [orders, setOrders] = useState(false);
  const [boxes, setBoxes] = useState(false);
  const [settings, setSettings] = useState(false);
  const [picture, setPicture] = useState(false);
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
  const handleBoxes = () => {
    if (boxes) {
      setBoxes(false);
    }
    else {
      setBoxes(true);
    }
  }
  const handleSettings = () => {
    if (settings) {
      setSettings(false);
    }
    else {
      setSettings(true);
    }
  }
  const handleImage = () => {
    if (picture) {
      setPicture(false);
    }
    else {
      setPicture(true);
    }
  }
  return (
      <div className={classes.container}>
        <div className={classes.card} >
          <span className={classes.title}>xo.</span>
          <div className={classes.rowContainer}>
            {!picture &&
             <img src={photo} onClick={handleImage}/> 
            }
             {picture &&
             <img src={photo} onClick={handleImage}  style={{border: '1px solid #0A47C4', borderRadius: 30}}/> 
            }
             <div className={classes.nameContainer}>
             <span>Ahmed Reda</span>
             <span className={classes.id}>#1253724</span>
             </div>
          </div>
          <div className={classes.rowContainer}>
            <DashboardIcon style={{color: '#C2CFE0'}}/>
            <span style={{marginLeft: 20, color: '#334D6E'}}>Dashboard</span>
          </div>
          {!requests &&
          <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleRequests}>
            <ViewAgendaIcon style={{color: '#C2CFE0'}}/>
            <span style={{marginLeft: 20, color: '#334D6E'}}>Requests</span>
            </div>
          } 
            {requests && 
                <div>
                    <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleRequests}>
                      <ViewAgendaIcon style={{color: '#0A47C4'}}/>
                      <span style={{marginLeft: 20, color: '#0A47C4'}}>Requests</span>
                      </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon style={{color: '#FFB946'}} />
                  </div>
                  <span>Pending</span>
                </div>
                <div className={classes.subRow}>
                <RadioButtonUncheckedIcon style={{color: '#2ED47A'}} />
                <span>Confirmed</span>
              </div>
              <div style={{marginTop: 20}}>
              <span style={{marginLeft: 50}}>All Requests</span>
              </div>
              </div>
            }
            {!users &&
          <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleUsers}>
            <PersonOutlineIcon style={{color: '#C2CFE0'}}/>
            <span style={{marginLeft: 20, color: '#334D6E'}}>Users</span>
            </div>
            }
            {users &&
              <div>
                 <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleUsers}>
            <PersonOutlineIcon style={{color: '#0A47C4'}}/>
            <span style={{marginLeft: 20, color: '#0A47C4'}}>Users</span>
            </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon style={{color: '#FFB946'}}/>
                  </div>
                  <span>Customers</span>
                </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon style={{color: '#885AF8'}}/>
                  </div>
                  <span>Admins</span>
                </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon style={{color: '#2ED47A'}}/>
                  </div>
                  <span>Ordering</span>
                </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon style={{color: '#F7685B'}}/>
                  </div>
                  <span>WareHouse</span>
                </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon style={{color: '#334D6E'}}/>
                  </div>
                  <span>Accounting</span>
                </div>
              </div>
            }
            {!boxes &&
             <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleBoxes}>
            <InboxIcon style={{color: '#C2CFE0'}}/>
            <span style={{marginLeft: 20, color: '#334D6E'}}>Boxes</span>
            </div>
            }
             {boxes &&
             <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleBoxes}>
            <InboxIcon style={{color: '#0A47C4'}}/>
            <span style={{marginLeft: 20, color: '#0A47C4'}}>Boxes</span>
            </div>
            }
            {!orders &&
            <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleOrders}>
            <ChatBubbleOutlineIcon style={{color: '#C2CFE0'}}/>
            <span style={{marginLeft: 20, color: '#334D6E'}}>Orders</span>
            </div>
            }
            {
              orders &&
              <div>
                 <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleOrders}>
            <ChatBubbleOutlineIcon style={{color: '#0A47C4'}}/>
            <span style={{marginLeft: 20, color: '#0A47C4'}}>Orders</span>
            </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon style={{color: '#FFB946'}}/>
                  </div>
                  <span>Pending</span>
                </div>
                <div className={classes.subRow}>
                  <div>
                  <RadioButtonUncheckedIcon style={{color: '#2ED47A'}}/>
                  </div>
                  <span>Confirmed</span>
                </div>
                <div style={{marginTop: 20}}>
              <span style={{marginLeft: 50}}>All Orders</span>
              </div>
              </div>
            }
            <div style={{ borderBottom: '1px solid #EBEFF2', marginTop:50}}/>
            {!settings &&
            <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleSettings}>
            <MoreHorizIcon style={{color: '#C2CFE0'}}/>
            <span style={{marginLeft: 20, color: '#334D6E'}}>Settings</span>
            </div>
            }
            {settings &&
            <div className={classes.rowContainer} style={{cursor: 'pointer'}} onClick={handleSettings}>
            <MoreHorizIcon style={{color: '#0A47C4'}}/>
            <span style={{marginLeft: 20, color: '#0A47C4'}}>Settings</span>
            </div>
            }
            <div className={classes.rowContainer} style={{cursor: 'pointer'}}>
            <PowerSettingsNewIcon style={{color: '#C2CFE0'}}/>
            <span style={{marginLeft: 20, color: '#C2CFE0'}}>Logout</span>
            </div>
          </div>
            <Requests />
      </div>
  );
}
const useStyles = makeStyles({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
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

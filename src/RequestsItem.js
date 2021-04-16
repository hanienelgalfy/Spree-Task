import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import dateFormat from 'dateformat';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
function RequestsItem(props){
    const classes = useStyles();
return (
    <div className={classes.row} key={props.index} style={{backgroundColor: props.backgroundColor}}>
    <div style={{width: '10%'}} className={classes.center}>
        <CheckBoxOutlineBlankIcon style={{color: '#E5E5E5'}}/>
        </div>
        <div style={{width: '10%'}} className={classes.center}>
        <span >#{props.item.id}</span>
        </div>
        <div style={{width: '15%'}} className={classes.center}>
        <span>{props.item.customer.fname} {props.item.customer.lname}</span>
        </div>
        <div style={{width: '15%'}} className={classes.center}>
        <span>{props.item.status}</span>    
        </div>
        <div style={{width: '20%'}} className={classes.center}>
        <span>{props.item.supplier}</span>
        </div>
        <div style={{width: '20%'}} className={classes.center}>
        <span>{dateFormat(props.item.created_at, "mmmm dS HH:mm, yyyy")}</span>
    </div>
    </div>
)
}
const useStyles = makeStyles({
    row: {
        padding: 20,
        display: 'flex',
        borderBottom: '1px solid #EBEFF2',
        flexDirection: 'row',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    }
 });
export default RequestsItem;
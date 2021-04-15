import React , {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import dateFormat from 'dateformat';
import localeCompare from "locale-compare";
function Table(props){
    const classes = useStyles();
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = 'https://o53hpo7bf9.execute-api.us-west-2.amazonaws.com/dev/orders';
        fetch(url)
        .then(res => res.json())
        .then((data) => {
        setData(data.orders);
        console.log(data);
        })
        .catch(err => { throw err });
      }, []);
      
return (
    <div className={classes.tableConatiner}>
        {/**First Row*/}
        <div className={classes.row}>
            <div style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
    <CheckBoxOutlineBlankIcon style={{color: '#E5E5E5'}}/>
    </div>
    <div style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
    <span className={classes.text}>ID Number</span>
    </div>
    <div style={{width: '15%', display: 'flex', justifyContent: 'center'}}>
    <span className={classes.text}>Name</span>
    </div>
    <div style={{width: '15%', display: 'flex', justifyContent: 'center'}}>
    <span className={classes.text}>Status</span>
    </div>
    <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
    <span className={classes.text}>Supplier</span>
    </div>
    <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
    <span className={classes.text}>Date</span>
    </div>
        </div>
        {/**Requests not sorted*/}
        {props.sort === 2&&
            <div >
            {data.sort((a, b) => a.id - b.id).map((item, index) => {return (
                <div>
                {item.status === "pending_confirmation" && 
                 <div className={classes.row} key={index} style={{backgroundColor:'#EBFFE1'}}>
                     <div style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
                 <CheckBoxOutlineBlankIcon style={{color: '#E5E5E5'}}/>
                 </div>
                 <div style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
                 <span >#{item.id}</span>
                 </div>
                 <div style={{width: '15%', display: 'flex', justifyContent: 'center'}}>
                 <span>{item.customer.fname} {item.customer.lname}</span>
                 </div>
                 <div style={{width: '15%', display: 'flex', justifyContent: 'center'}}>
                 <span>{item.status}</span>    
                 </div>
                 <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
                <span>{item.supplier}</span>
                </div>
                <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
                <span>{dateFormat(item.created_at, " mmmm dS HH:mm, yyyy")}</span>
                </div>
                </div>}  

                {item.status === "confirmed" &&
                <div className={classes.row} key={index}>
                    <div style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
                <CheckBoxOutlineBlankIcon style={{color: '#E5E5E5'}}/>
                </div>
                <div style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
                <span >#{item.id}</span>
                </div>
                <div style={{width: '15%', display: 'flex', justifyContent: 'center'}}>
                <span>{item.customer.fname} {item.customer.lname}</span>
                </div>
                <div style={{width: '15%', display: 'flex', justifyContent: 'center'}}>
                <span>{item.status}</span>    
                </div>
                <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
                <span>{item.supplier}</span>
                </div>
                <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
                <span>{dateFormat(item.created_at, " mmmm dS HH:mm, yyyy")}</span>
                </div>
                </div>
            }
            </div>
            )})}
            </div>}
        {/**Requests sorted */}
       {props.sort === 1 && <div>
        {data.sort((a, b) => new Date(...a.created_at.split('/').reverse()) - new Date(...b.created_at.split('/').reverse())).map((item, index) => {return (
                <div>
                {item.status === "pending_confirmation" && 
                 <div className={classes.row} key={index} style={{backgroundColor:'#EBFFE1'}}>
                     <div style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
                 <CheckBoxOutlineBlankIcon style={{color: '#E5E5E5'}}/>
                 </div>
                 <div style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
                 <span >#{item.id}</span>
                 </div>
                 <div style={{width: '15%', display: 'flex', justifyContent: 'center'}}>
                 <span>{item.customer.fname} {item.customer.lname}</span>
                 </div>
                 <div style={{width: '15%', display: 'flex', justifyContent: 'center'}}>
                 <span>{item.status}</span>    
                 </div>
                 <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
                <span>{item.supplier}</span>
                </div>
                <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
                <span>{dateFormat(item.created_at, " mmmm dS HH:mm, yyyy")}</span>
                </div>
                </div>}  

                {item.status === "confirmed" &&
                <div className={classes.row} key={index}>
                    <div style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
                <CheckBoxOutlineBlankIcon style={{color: '#E5E5E5'}}/>
                </div>
                <div style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
                <span >#{item.id}</span>
                </div>
                <div style={{width: '15%', display: 'flex', justifyContent: 'center'}}>
                <span>{item.customer.fname} {item.customer.lname}</span>
                </div>
                <div style={{width: '15%', display: 'flex', justifyContent: 'center'}}>
                <span>{item.status}</span>    
                </div>
                <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
                <span>{item.supplier}</span>
                </div>
                <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
                <span>{dateFormat(item.created_at, " mmmm dS HH:mm, yyyy")}</span>
                </div>
                </div>
            }
            </div>
            )})}
           </div>}
        
    </div>
)
};
const useStyles = makeStyles({
    tableConatiner: {
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: 'white',
        width: '95%',
        height: '100%',
    },
    row: {
        padding: 20,
        display: 'flex',
        borderBottom: '1px solid #EBEFF2',
        flexDirection: 'row',
    },
    text: {
        color: '#E5E5E5',
    }
 });
 export default Table;
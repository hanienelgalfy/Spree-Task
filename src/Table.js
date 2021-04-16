import React , {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import dateFormat from 'dateformat';
import Pagination from '@material-ui/lab/Pagination';
function Table(props){
    const classes = useStyles();
    const [data, setData] = useState([]);
    const filtered = data.filter((item) => item.status === 'confirmed');
    const[currentPage, setPage] = useState(1);
    const dataPerPage = 8;
    const totalPages = Math.ceil(data.length/dataPerPage);
    const indexOfLastData = currentPage * dataPerPage ;
    const indexOfFirstData = indexOfLastData - dataPerPage ;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);
    const currentFilterData = filtered.slice(indexOfFirstData, indexOfLastData);
    useEffect(() => {
        let url = 'https://o53hpo7bf9.execute-api.us-west-2.amazonaws.com/dev/orders';
        fetch(url)
        .then(res => res.json())
        .then((data) => {
        setData(data.orders);
        console.log(data);
        console.log(totalPages);
        })
        .catch(err => { throw err });
      }, []);
      const handlePageNumber = (event, value) => {
          setPage(value);
      }
return (
    <div className={classes.tableConatiner}>
        {/**First Row*/}
        <Pagination count={totalPages} onChange={handlePageNumber}/>
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
        {/**Filtered and sort by ID */}
        {props.filter === 1 && props.sort === 2 && props.text === '' &&
        <div>
    {currentFilterData.sort((a, b) => a.id - b.id).map((item, index) => {return (
        <div>
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
            </div>
        )})}
        </div>
        }
{/**Filtered and sort by Date */}
{props.filter === 1 && props.sort === 1 && props.text === '' &&
        <div>
    {currentFilterData.sort((a, b) => new Date(...a.created_at.split('/').reverse()) - new Date(...b.created_at.split('/').reverse())).map((item, index) => {return (
        <div>
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
            </div>
        )})}
        </div>
        }

        {/**ALL REQUESTS AND SORTED BY ID */}
        {props.sort === 2 && props.filter === 2 && props.text === '' &&
            <div >
            {currentData.sort((a, b) => a.id - b.id).map((item, index) => {return (
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
        {/**Requests sorted by Date*/}
       {props.sort === 1 && props.filter === 2 && props.text === '' && <div>
        {currentData.sort((a, b) => new Date(...a.created_at.split('/').reverse()) - new Date(...b.created_at.split('/').reverse())).map((item, index) => {return (
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
            {props.text !== '' && 
            <div>
                {currentData.map((item, index) => {return (
                    <div>
                    {(item.id == props.text || item.customer.fname + ' ' + item.customer.lname == props.text) && 
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
            </div>
            }
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
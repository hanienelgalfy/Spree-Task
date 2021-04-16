import React , {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import dateFormat from 'dateformat';
import Pagination from '@material-ui/lab/Pagination';
import RequestsItem from './RequestsItem';
function Table(props){
    const classes = useStyles();
    const [data, setData] = useState([]);
    const willSortByDate = data.slice();
    const sortedByDate = willSortByDate.sort((a, b) => new Date(...a.created_at.split('/').reverse()) - new Date(...b.created_at.split('/').reverse()));
    const sortedById = data.sort((a, b) => a.id - b.id);
    const filtered = data.filter((item) => item.status === 'confirmed');
    const[currentPage, setPage] = useState(1);
    const dataPerPage = 8;
    const totalPages = Math.ceil(data.length/dataPerPage);
    const indexOfLastData = currentPage * dataPerPage ;
    const indexOfFirstData = indexOfLastData - dataPerPage ;
    const currentSortedDataByID = sortedById.slice(indexOfFirstData, indexOfLastData);
    const currentSortedDataByDate = sortedByDate.slice(indexOfFirstData, indexOfLastData);
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
       <RequestsItem item={item} index={index} backgroundColor={"white"}/>
        )})}
        </div>
        }
{/**Filtered and sort by Date */}
{props.filter === 1 && props.sort === 1 && props.text === '' &&
        <div>
    {currentFilterData.sort((a, b) => new Date(...a.created_at.split('/').reverse()) - new Date(...b.created_at.split('/').reverse())).map((item, index) => {return (
       <RequestsItem item={item} index={index} backgroundColor={"white"}/>
        )})}
        </div>
        }

        {/**ALL REQUESTS AND SORTED BY ID */}
        {props.sort === 2 && props.filter === 2 && props.text === '' &&
            <div >
            {currentSortedDataByID.map((item, index) => {return (
                <div>
                {item.status === "pending_confirmation" && 
                 <RequestsItem item={item} index={index} backgroundColor={'#EBFFE1'}/>}  

                {item.status === "confirmed" &&
                <RequestsItem item={item} index={index} backgroundColor={"white"}/>
                }
            </div>
            )})}
            </div>}
        {/**Requests sorted by Date*/}
       {props.sort === 1 && props.filter === 2 && props.text === '' && <div>
        {currentSortedDataByDate.map((item, index) => {return (
                <div>
                {item.status === "pending_confirmation" && 
                    <RequestsItem item={item} index={index} backgroundColor={'#EBFFE1'}/>}  

                {item.status === "confirmed" &&
                    <RequestsItem item={item} index={index} backgroundColor={"white"}/>
            }
            </div>
            )})}
           </div>}
            {props.text !== '' && 
            <div>
                {data.map((item, index) => {return (
                    <div>
                    {(item.id == props.text || item.customer.fname + ' ' + item.customer.lname == props.text) && 
                        <RequestsItem item={item} index={index} backgroundColor={"white"}/>
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
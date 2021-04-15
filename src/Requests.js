import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { TextField } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table from './Table';
function Requests(){
    const classes = useStyles();
    const [sort, setSort] = React.useState(2);
    const [filter, setFilter] = React.useState('');
    const handleSort = (event) => {
        setSort(event.target.value);
      };
      const handleFilter = (event) => {
        setFilter(event.target.value);
      };
return (
    <div className={classes.container}>
        {/**Search Bar*/}
        <div className={classes.searchContainer}>
        <TextField
            placeholder="Search by name or ID"
            InputProps={{
                startAdornment: (
                <InputAdornment>
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                </InputAdornment>
                )
            }}
            className={classes.searchBar}
            />
    </div>
        {/**Header */}
        <div className={classes.headerContainer}>
            <div>
                <span>Requests</span>
            </div>
            <div>
                <span>Sort by: </span>
                <Select  value={sort} onChange={handleSort} style={{width: 150}} disableUnderline className={classes.menuItem}>
                <MenuItem value={1}>Date</MenuItem>
                <MenuItem value={2}>ID</MenuItem>
                </Select>
                <span>Filters: </span>
                <Select value={filter} onChange={handleFilter} style={{width: 200}} disableUnderline className={classes.menuItem}>
                <MenuItem value={1}>Total $2000-3000</MenuItem>
                </Select>
            </div>
        </div>
        {/**Table */}
        <Table sort={sort} />
    </div>
)
};
const useStyles = makeStyles({
    container: {
        backgroundColor: '#E5E5E5',
        width: '100%',
        height: '100%',
    },
    searchBar: {
        border: 'none',
        width: '100%',
        marginLeft: 20,
        height: 50,
    },
    searchContainer: {
        backgroundColor: 'white',

        display: 'flex',
        flexDirection: 'row',
    },
    headerContainer: {
        margin: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuItem: {
        color: '#109CF1'
    },
  });
export default Requests;
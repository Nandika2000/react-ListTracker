import ListItem from "../ListItem/ListItem";
import '../List/List.css';
import { useState } from "react";
const List = (props) => {
    const [initialList, setInitialList] = useState(props.lists);
    const generateKey =(hours) =>{
        const key = hours *(Math.sin(hours));
        return key;
    }
    const filterLists =(event) =>{
        const [lowerLimit, upperLimit] = event.target.value.split('-');
        const filteredList = props.lists.filter((list)=> {return (list.hours>=lowerLimit && list.hours<upperLimit)});
        setInitialList(filteredList);
    }
    return ( 
    <div className= 'Lists'>
         <label for="filter">Choose a filter for hours:</label>
        <select name="hours" onChange={filterLists}>
          <option value="0-1000">All</option>
          <option value='0-50'>less than 50 hrs</option>
          <option value='50-100' >50 - 100 hrs</option>
          <option value='100-1000'>greater than 100 hrs</option>
        </select>
        {initialList.map((item)=> <ListItem key ={generateKey(item.hours)} title = {item.title} description = {item.description} hours ={item.hours}/> )}
    </div>
    )
};
export default List;
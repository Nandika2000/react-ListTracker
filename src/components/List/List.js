import ListItem from "../ListItem/ListItem";
import '../List/List.css';
const List = (props) => {
    const generateKey =(hours) =>{
        const key = hours *(Math.sin(hours));
        return key;
    }
    return ( 
    <div className= 'Lists'>
        {props.lists.map((item)=> <ListItem key ={generateKey(item.hours)} title = {item.title} description = {item.description} hours ={item.hours}/> )}
        {/* <ListItem title = {props.lists[0].title} description = {props.lists[0].description}/>
        <ListItem title = {props.lists[1].title} description = {props.lists[1].description}/>
        <ListItem title = {props.lists[2].title} description = {props.lists[2].description}/> */}
    </div>)
};
export default List;
import { useState } from 'react';
import '../ListItem/ListItem.css'

const ListItem = (props) => {
    const [initialTitle,setInitialTitle] = useState(props.title);
    const updateTitle = () =>{
        setInitialTitle('COMPLETED!');
    }
return (
    <div className="List-Item">
    <h1>{initialTitle}</h1>
    <p> DESCRIPTION: {props.description}</p>
    <p>HOURS: {props.hours}</p>
    <button onClick={updateTitle}>Update</button>
    </div>
)
};
export default ListItem;
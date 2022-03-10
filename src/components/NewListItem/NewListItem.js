import { useState } from "react";
import '../NewListItem/NewListItem.css'
const NewListItem = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredHours, setEnteredHours] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newListData = {
      title: enteredTitle,
      description: enteredDescription,
      hours:enteredHours,
    };
    props.onSaveListData(newListData);
    setEnteredTitle("");
    setEnteredDescription("");
    setEnteredHours("");

  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const hoursChangeHandler = (event) => {
      setEnteredHours(event.target.value);
  }


  return (
    <form onSubmit={submitHandler} className='new-list'>
      <div>
        <label>TITLE</label>
        <input
          value={enteredTitle}
          onChange={titleChangeHandler}
          type="text"
        ></input>
      </div>
      <div>
        <label>DESCRIPTION</label>
        <input
          value={enteredDescription}
          onChange={descriptionChangeHandler}
          type="text"
        ></input>
      </div>
      <div>
        <label>HOURS</label>
        <input
          value={enteredHours}
          onChange={hoursChangeHandler}
          type="text"
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default NewListItem;
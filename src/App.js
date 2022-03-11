import './App.css';
import List from './components/List/List';
import React, { useState } from 'react';
import NewListItem from './components/NewListItem/NewListItem';
function App() {
  const saveListData = (newListItem) => {
    setInitialList((prevList)=>[...prevList, newListItem]);
  };
 
  const lists = [{title:"PHYSICAL",description: "to-do", hours: 10, id:2 },
  {title:"SHOPPING",description: "to-do", hours:50 ,id:1},
  {title:"HOMEWORK",description: "to-do", hours:100 ,id:3}
]
const [initialList,setInitialList] =useState(lists);
  return (
      <div className= 'List-blocks'>
       <List lists ={initialList}/>
       <NewListItem onSaveListData={saveListData} />
      </div>
  );
}

export default App;

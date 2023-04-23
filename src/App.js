import React from 'react';
import List from './List';

function App() {
  const items = [
    { 
      index: 1,
      text: "something", 
    },
    { 
      index: 2,
      text: "something2", },
    { 
      index: 3,
      text: "something3",},
    { 
      index: 4,
      text: "something4",},
    { 
      index: 5,
      text: "something5",},
    
  ];

  return (
    <div>
      <h1>List Component</h1>
      <List items={items} />
    </div>
  );
}

export default App;
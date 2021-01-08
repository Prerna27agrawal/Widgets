import React, { useReducer, useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
const items =[
    {
        title:'Wha is React?',
        content:'React is a front end js framework'
    },
    {
        title:'Wha is Reactfffffff?',
        content:'React is a front fffffffffffffeeeeend js framework'
    },
    {
        title:' hdsshf?',
        content:'React ishgdfajhdygsdjhusydga amework'
    }
]

const options = [
    {
        label:'The Color Red',
        value:'red'
 
    },
    {
        label:"The Color Green",
        value:'green'
    },
    {
        label:'The Color Blue',
        value:"blue"
    }
];


export default ()=>{

    const[selected,setSelected]= useState(options[0]);
    const [showDropdown,setShowDropdown] = useState(true);

    return (
    <div>
        <Header/>
        <Route path="/">
            <Accordion items={items}/>
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
     {showDropdown ?
         <Dropdown  
     selected={selected}
     onSelectedChange={setSelected}
       options={options} 
      />:null
     }
        </Route>
        <Route path="/translate">
            <Translate/>
        </Route>
    </div>
        );
};
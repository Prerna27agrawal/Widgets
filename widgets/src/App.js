import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
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
]
export default ()=>{

    const[selected,setSelected]= useState(options[0]);

    return (
    <div>
     <Dropdown  
     selected={selected}
     onSelectedChange={setSelected}
       options={options} 
      />
    </div>
        );
};
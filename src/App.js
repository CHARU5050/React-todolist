import './app.css'

import { useState } from 'react';
import {v4 as uuid} from 'uuid';

import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Works from './components/workspage';
import Home from './home'


function App() {
  const [tasks,settasks]=useState([ 
    {
      id:uuid(),
      title:"My works",
      img:'gif/borboletas-butterflies.gif',
      works:[
        {
          id:uuid(),
          work:'project',
          completed:true
        }
      ]
      
    }
  ])
 
  return (<>
 <Router>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} settasks={settasks} />} />
        <Route path="/:id" element={<Works tasks={tasks} settasks={settasks}/>} />
      </Routes>
    </Router>
  
  </>
  );
}

export default App;


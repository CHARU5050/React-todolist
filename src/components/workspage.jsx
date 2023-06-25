import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ListofWorks from "./listofworks";

import './style/work.css'


const Works = ({ tasks, settasks }) => {
  const { id } = useParams();
  const [specificTasks, setSpecificTasks] = useState([]);

  useEffect(() => {
    const filteredTasks = tasks.filter((item) => item.id === id);
    setSpecificTasks(filteredTasks);
  }, [id,tasks]);

 

  return (
    <>
  
      <ListofWorks id={id} settasks={settasks} specificTasks={specificTasks} setSpecificTasks={setSpecificTasks}></ListofWorks>
      
      </>
  );
};

export default Works;

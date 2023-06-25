import { useEffect, useState } from "react";
import {v4 as uuid} from 'uuid';
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {AiFillDelete} from "react-icons/ai";
import {BiArrowBack} from "react-icons/bi";
import { Link } from "react-router-dom";








const ListofWorks = ({id,settasks,specificTasks,setSpecificTasks}) => {
  
    const [inputwork,setinputwork]=useState('');
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        const n={
            id:uuid(),
            work:inputwork,
            completed:false
        }
        console.log(n)
        
      
          settasks((prevTasks) => {
            return prevTasks.map((task) => {
              if (task.id === id) {
                const updatedWorks = [...task.works, n];
                return { ...task, works: updatedWorks };
              }
              return task;
            });
          });
      
          setinputwork("");
          let popup = document.getElementsByClassName('addwork');
      if (popup.length > 0) {
        popup[0].classList.remove('open-popup');
      }
        

        

    }
    const openpopup = () => {
      let buttons = document.getElementsByClassName('addbtn');
  if (buttons.length > 0) {
    let button = buttons[0];
    button.style.backgroundColor = "black";
  }
      let popup = document.getElementsByClassName('addwork');
      if (popup.length > 0) {
        popup[0].classList.add('open-popup');
      }
    };
    const closepopup=()=>{
      let popup = document.getElementsByClassName('addwork');
      if (popup.length > 0) {
        popup[0].classList.remove('open-popup');
      }
    }
 

    const handleCheckboxChange = (workId) => {
        settasks((prevTasks) => {
          return prevTasks.map((task) => {
            if (task.id === id) {
              const updatedWorks = task.works.map((work) => {
                if (work.id === workId) {
                  return { ...work, completed: !work.completed };
                }
                return work;
              });
              return { ...task, works: updatedWorks };
            }
            return task;
          });
        });
        setSpecificTasks((prevTasks) => {
            return prevTasks.map((task) => {
              if (task.id === id) {
                const updatedWorks = task.works.map((work) => {
                  if (work.id === workId) {
                    return { ...work, completed: !work.completed };
                  }
                  return work;
                });
                return { ...task, works: updatedWorks };
              }
              return task;
            });
          });
      };

      const deletework = (did) => {
        settasks((prevTasks) =>
          prevTasks.map((task) => {
            const updatedWorks = task.works.filter((work) => work.id !== did);
            return { ...task, works: updatedWorks };
          })
        );
      };
      
    return ( <div className="mwork">
      
    <div className="workarea">
   <Link to="/" ><BiArrowBack className="back"></BiArrowBack></Link>
  
    {specificTasks.map((task) => (
      <div className="titlework">
      <img src={task.img}></img>
      <h1 key={task.id}>{task.title}</h1>
      </div>
    ))}
  
  {specificTasks &&
    specificTasks[0] &&
    specificTasks[0].works.length!==0 && <div className="fworkpage"> 
    <div className="mworkpage">
  {specificTasks &&
    specificTasks[0] &&
    specificTasks[0].works.map((work) => (

      <div className='workpage'key={work.id}>
        <div className="checkh3">
        <input
          type="checkbox"
          checked={work.completed}
          onChange={() => handleCheckboxChange(work.id)}
        />
        <h3>{work.work}</h3>
        </div>
        <button onClick={()=>deletework(work.id)}><AiFillDelete></AiFillDelete></button>
      </div>
      
    ))}
    </div>
    </div>} 
    <div className="addwork">
          <form onSubmit={handlesubmit}>
          <AiOutlineClose onClick={closepopup} className="close"></AiOutlineClose>
          
          <input type="text" required className="works" id="works" placeholder="Enter the task"
          value ={inputwork} onChange={(e)=>setinputwork(e.target.value)}
          ></input>
          <button>add</button>
          </form>
      </div >
      <div>
        <button onClick={openpopup} className='addbtn'>
      <AiOutlinePlusCircle className='add'></AiOutlinePlusCircle>
 </button>
      </div>
     
      </div>
     

</div>);
  
  
}
 
export default ListofWorks;
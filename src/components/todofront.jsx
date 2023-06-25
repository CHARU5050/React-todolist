import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './style/todotitle.css'
import { Link } from 'react-router-dom';
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {AiFillDelete} from "react-icons/ai";



const Todofront = ({tasks,settasks}) => {
  const [inputtitle,setinputtitle]=useState('');
  const[imgurl,setimgurl]=useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  const imageOptions = [
    { url: 'gif/bus.gif' },
    { url: 'gif/calender.gif' },
    { url: 'gif/shoppingcart.gif' },
    { url: 'gif/selfcare.gif' },
    { url: 'gif/shoppingbag.gif' },
    { url: 'gif/table.gif' },
    { url: 'gif/team.gif' },
    { url: 'gif/bus.gif' },
    { url: 'gif/ride.gif' },
    { url: 'gif/lap.gif' },
    { url: 'gif/flight.gif' },
    { url: 'gif/flowers-aster.gif' },
    {url:'gif/peach-cat.gif'},
    { url: 'gif/work-late.gif' },
    { url: 'gif/tkthao219-peach.gif' },
    {url:'gif/borboletas-butterflies.gif'}
    
  ];
  

  const handleSubmit=(e)=>{
      e.preventDefault();
      const t={
          id:uuid(),
          title:inputtitle,
          img:imgurl,
          works:[]
      }
      let popup = document.getElementsByClassName('newtitle');
      if (popup.length > 0) {
        popup[0].classList.remove('open-popup');
      }
      settasks([...tasks,t])
      
     
      setinputtitle('')
      setimgurl('')

  }
  const handleImageChange = (event) => {
      setimgurl(event.target.value);
    
        const inputContainers = document.getElementsByClassName('input-container');
        for (let i = 0; i < inputContainers.length; i++) {
          const input = inputContainers[i].querySelector('input');
          if (input === event.target) {
            inputContainers[i].classList.add('checked');
          } else {
            inputContainers[i].classList.remove('checked');
          }

        
      };
      
    
    };
    const openpopup = () => {
      let buttons = document.getElementsByClassName('mconbtn');
  if (buttons.length > 0) {
    let button = buttons[0];
    button.style.backgroundColor = "black";
  }
      let popup = document.getElementsByClassName('newtitle');
      if (popup.length > 0) {
        popup[0].classList.add('open-popup');
      }
    };
    const closepopup=()=>{
      let popup = document.getElementsByClassName('newtitle');
      if (popup.length > 0) {
        popup[0].classList.remove('open-popup');
      }
    }

    const deleteTask = (taskId) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      settasks(updatedTasks);
    };
 

  return (  
    <div className='mcontainer'>
      <div className='imh1'>
      <img src='gif/gif-png.gif'></img>
      {tasks && <h1>Titles</h1>}
      {!tasks && <h3>Add Titles to make List</h3>}
      </div>
    
      {tasks && tasks.map((task) => (
        <div className='container'>
    
       
          <img src={task.img}></img>
          <div className='con'>
            
          <h1 className="">{task.title}</h1>
           <p  className='paraf'>Total Tasks:{task.works.length}</p>
{task.works.length === 0 ? (
  <p className="para">You have no task</p>
) : task.works.length === 1 ? (
  <p className="para">For a single task, easily achieve it from start to finish</p>
) : task.works.length === 2 ? (
  <p className="para">Double the efficiency, conquer 2 tasks with ease!</p>
) : task.works.length === 3 ? (
  <p className="para">Effortlessly tackle three tasks, spanning from the first to the third.</p>
) : task.works.length === 4 ? (
  <p className="para">Effortlessly handle a collection of four tasks, spanning across the series.</p>
) : (
  <p className="para">{task.works.length} tasks, Limitless possibilities. Discover the magic of today!</p>
)}

          <div className='del'>
          <Link to ={`/${task.id}`}><button className='conbtn'> Get into the tasks</button></Link>
          <button className="delbtn" onClick={()=> {deleteTask(task.id)}}>Delete</button>
          </div>
          </div>
          </div>
       
      
      ))}
      <div className='popup'>
        <div className='newtitle'>
            <form onSubmit={handleSubmit}>
            <AiOutlineClose onClick={closepopup} className='close'></AiOutlineClose>
            <input
             type ='text' 
             className='title'
             required
             value={inputtitle}
             placeholder='ENTER THE TITLE'
             onChange={(e)=>{setinputtitle(e.target.value)}}
        
            
            ></input>
            <p>Select the image which you like:</p>
            <div className='radio-container'>
            <div className='radio-group'>
  {imageOptions.map((option, index) => (
    <div
      className={`input-container ${selectedImageIndex === index ? 'selected' : ''}`}
      key={index}
      onClick={(event) => handleImageChange(event, index)}
    >
      <input
        type="radio"
        name="image"
        value={option.url}
        checked={imgurl === option.url}
        onChange={(event) => handleImageChange(event, index)}
      />
      <div className='radio-title'>
        <img src={option.url} alt={`Image ${index + 1}`} width="100" height="100" />
      </div>
    </div>
  ))}


        </div>
      
    
      

      
    </div>
            <button>add title</button>
          
           
            </form>

            
   
            
        </div>
        <button onClick={openpopup} className='mconbtn'>
        <AiOutlinePlusCircle className='add'></AiOutlinePlusCircle>
   </button>
   </div>
      
      </div>
      
        
  );
}

export default Todofront;
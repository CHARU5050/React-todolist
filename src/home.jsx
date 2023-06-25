import Todofront from './components/todofront'

import Carousel from './carousel'


const Home = ({tasks,settasks}) => {
    return (<>
        <Carousel />
        <Todofront tasks={tasks} settasks={settasks}/>
      
      </>  );
}
 
export default Home;
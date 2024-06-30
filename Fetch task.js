import React,{ usestate, useeffect, useEffect} from 'react';
import axios from 'axios';


const Tasklist = () = {
    const [tasks, settasks] = usestate([]);
    const [error, seterror ] = usestate(null);

    useEffect(() = {
        const fetchtasks =async () ={
            try {
                const response = await axios.get();
                settasks(response.data);
   } catch (error) {
    seterror (error.message);
   }
  };
   fetchtasks();
   },[]);

   return (
     <div>
     {error && <p>{error}</p>}
     {tasks.map(task = (
        

     }
     
     </div>

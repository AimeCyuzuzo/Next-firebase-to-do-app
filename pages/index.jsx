import React, { useState } from "react";

const Home = () => {

  const [todos, setTodos] = useState(['Take a walk across the road','Check if you can play a video game'])
  const [input, setInput] = useState('')
  const addTodo =(event) =>{
    event.preventDefault();
    setTodos([...todos, input])
    setInput('')
  }
  
  
  return ( 
    <div>
      <div className="homeParent">
        <h1>To Do App</h1>
        <div className="addtodo">
          <form action="">
            <input type="text" value={input} onChange={event =>(setInput(event.target.value))} />
            <button disabled={!input} type="submit" onClick={addTodo}>Add todo</button>
          </form>
        </div>
        
        <ul>

            {
              todos.map(todo =>(
                <li>
                  {todo}
                </li>
              ))
            }
            <p>
              {input}
            </p>


        </ul>
      </div>
      <a href="#header"></a>
    </div>
   );
}
 
export default Home;
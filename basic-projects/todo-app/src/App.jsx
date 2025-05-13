import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import ToDoItem1 from "./components/ToDoItem1"
import ToDoItem2 from "./components/ToDoItem2"
import './App.css';

function App() {
return(
   <center class="container">
<AppName/>
<AddToDo/>
<ToDoItem1/>
<ToDoItem2/>
</center>
)
}

export default App

function ToDoItem1(){
    let todoname='go to college'
    let tododate='4/12/24'
 return (
   <div class="container">
    <div div class="row">
    <div class="col-6">
      {todoname}
    </div>
    <div class="col-4">{tododate}</div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>

   </div>
  
  )
}
export default ToDoItem1;
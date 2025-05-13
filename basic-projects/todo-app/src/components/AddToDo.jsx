function AddToDo(){
    return (<>
<div class="container text-center">
  <div className="row mb-3">
  <div class="row">
    <div class="col-6">
      <input type="text" placeholder="Enter todo here"/>
    </div>
    <div class="col-4"><input type="date"/></div>
    <div class="col-2"><button type="button" class="btn btn-success">Add</button></div>
  </div>


 
 </div>
  </div>
  </>)
}
export default AddToDo;
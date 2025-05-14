import Items from './components/items.jsx'
import Error from './components/Error.jsx'
import "./App.css"
function App() {
 
let item=['one','two','three','four','five','six']
  return(
  <> 
  <h1>fragments</h1>
 <Items foodItem={item}></Items>
 <Error foodItem={item}></Error>
  </>)
}

export default App

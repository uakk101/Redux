
import './App.css';
import { useSelector,useDispatch} from 'react-redux';
import {addItem , deleteItem} from './actions/cartAction'



function App() {

  const state = useSelector((state) => state);

 console.log(state);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Number of items in Cart: {state.numOfItems}</h2>
      <button
        onClick={() => {
          dispatch(addItem());
        }}
      className="green">Add Item to Cart</button>
      <button
              onClick={() => {
                dispatch(deleteItem());
              }}
      className="red">Remove Item from Cart</button>
    </div>
  );
}

export default App;

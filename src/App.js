import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const products = [
    {name: 'laptop', price:60000},
    {name: 'phone', price:36000},
    {name: 'watch', price:6000},
    {name: 'tab', price:7000},
  ]
  return (
    <div className="App">
      {/* <Counter></Counter> */}

      <ExternalUsers></ExternalUsers>
    </div>
  );
}

//previous code
/* {
  products.map(product => <Product name={product.name} price={product.price}></Product> )
}
{<Product name="laptop" price="100000"></Product>
<Product name="phone" price="75000"></Product>
<Product name="watch" price="5000"></Product>} */

function Product(props) {
  return(
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

function ExternalUsers() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data) )
  }, []);

  return (
    <div>
      <h2>External Users</h2>
      <p>{user.length}</p>
      {
        user.map(user => <User name={user.name} email={user.email} phone={user.phone} company={user.company} address={user.address}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
      <h4>Phone: {props.phone}</h4>
      <h4>Address: {props.address.city}</h4>
      <h4>Company: {props.company.name}</h4>
      
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(33);

  const increaseCount = () =>setCount(count + 1);
  const decreaseCount = () =>setCount(count - 1);

  const multiply2Count = () =>setCount(count * 2);
 

  //another option
 /*  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  } */
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <br></br>
      <button onClick={decreaseCount}>Decrease</button>
      <br></br>
      <button onClick={multiply2Count}>Double</button>
    </div>
  )
}

export default App;

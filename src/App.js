import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState('');

  const displayName = (e) => {
    if (firstName !== '' && lastName !== '') {
      e.preventDefault();
      setFlag(true);
      setName(firstName + " " + lastName)
    } else if (firstName === '') {
      setFirstName('');
      setFlag(false);
    } else if (lastName === '') {
      setLastName('');
      setFlag(false);
    }
  }

  return (
    <div className="App">
      <form className='formElement'>
        <h1>Full Name Display</h1>
        <div>
          <label>First Name:</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <button onClick={(e) => displayName(e)}>Submit</button>
        </div>
      </form>
      <div>
        {flag ?
          (
            <p>Full Name: {name}</p>
          ) : (
            <></>
          )
        }
      </div>
    </div>
  );
}

export default App;

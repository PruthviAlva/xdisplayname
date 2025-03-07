import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [flag, setFlag] = useState(false);

  const displayName = (e) => {
    if (firstName !== '' && lastName !== '') {
      e.preventDefault();
      setFlag(true);
    }
  }

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form className='formElement'>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <button onClick={(e) => displayName(e)}>Submit</button>
        </div>
      </form>
      <div>
        {flag ?
          (
            <p>Full Name: {firstName} {" "} {lastName}</p>
          ) : (
            <></>
          )
        }
      </div>
    </div>
  );
}

export default App;

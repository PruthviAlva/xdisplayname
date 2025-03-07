import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState('');

  const displayName = (e) => {
    e.preventDefault(); // Prevent form submission reload
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      setFlag(true);
      setName(`${firstName} ${lastName}`);
    } else {
      setFlag(false);
      setName('');
    }
  }

  return (
    <div className="App">
      <form className='formElement' onSubmit={displayName}>
        <h1>Full Name Display</h1>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {flag && <p>Full Name: {name}</p>}
    </div>
  );
}

export default App;

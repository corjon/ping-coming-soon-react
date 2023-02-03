import { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg';
import dashboard from './assets/illustration-dashboard.png';

function Form() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  function handleChange(e) {
    setEmail(e.target.value);
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setIsValid(re.test(String(e.target.value).toLowerCase()));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email === '') {
      setIsValid(false);
    }
    else if (isValid) {
      alert('valid email: ' + email);
      // submit form
      setEmail('');
      setIsValid(null);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={email} onChange={handleChange} placeholder="Your email address..." 
        style={{borderColor: isValid === null ? '#C2D3FF' : isValid ? '#C2D3FF' : '#FF5466'}} 
      />
      {isValid === false && email === '' ? (
        <p class="error">Whoops! It looks like you forgot to add your email</p> 
      ) : (
        isValid === false && <p class="error">Please provide a valid email address</p>
      )}
      <input type="submit" value="Notify Me" />
    </form>
  );
}

export default function App() {
  return (
    <main>
      <img src={logo} alt="company logo" class="logo" />
      <h1>We are launching <span>soon!</span></h1>
      <p class="cta">Subscribe and get notified</p>
      <Form />
      <img src={dashboard} alt="dashboard with graphs" class="dashboard" />

      <div class="socials">
        <a href="#" aria-label="facebook" class="fa fa-facebook-f"></a>
        <a href="#" aria-label="twitter" class="fa fa-twitter"></a>
        <a href="#" aria-label="instagram" class="fa fa-instagram"></a>
      </div>
  
      <p class="copy">&copy; Copyright Ping. All rights reserved.</p>
    </main>
  );
}

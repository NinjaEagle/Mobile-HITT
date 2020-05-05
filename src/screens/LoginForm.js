import React, { useState } from 'react';
import './styles.css';

export default function App() {
  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  );
}

function Form({ header, fields, onChange, onSubmit }) {
  const [fieldState, setFieldState] = useState({});

  return <form>{this.LoginForm2}</form>;
}

function LoginForm2() {
  return (
    <Form
      header="Login Form"
      fields={[
        { key: 'email', type: 'email', label: 'Email Address' },
        { key: 'password', type: 'password', label: 'Password' },
      ]}
      onChange={e => {
        setFieldValues(fields);
      }}
      onSubmit={values => /* values === { email: "", password: ""} */ console.log(values)}
    />
  );
}

function LoginForm() {
  const [user, setUser] = useState('');
  const [pass, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user, pass);
  };
  return (
    <div className="App">
      <h1>Login form </h1>
      <form onSubmit={handleSubmit} className="Form">
        Username:
        <input
          className="field"
          name="user"
          type="text"
          value={user}
          onChange={e => setUser(e.currentTarget.value)}
        />
        Password:
        <input
          className="field"
          name="pass"
          type="password"
          value={pass}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <button className="field" id="loginb" type="submit">
          Login{' '}
        </button>
      </form>
    </div>
  );
}

function RegisterForm() {
  const [user, setUser] = useState('');
  const [pass, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user, pass);
  };
  return (
    <div className="App">
      <h1>Login form </h1>
      <form onSubmit={handleSubmit} className="Form">
        Username:
        <input
          className="field"
          name="user"
          type="text"
          value={user}
          onChange={e => setUser(e.currentTarget.value)}
        />
        Password:
        <input
          className="field"
          name="pass"
          type="password"
          value={pass}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <input
          className="field"
          name="confirmpass"
          type="password"
          value={pass}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <button className="field" id="loginb" type="submit">
          Login{' '}
        </button>
      </form>
    </div>
  );
}

// Login Form

// username
// input

// password
// input

// submit

// Register Form

// username
// input

// phone number
// input

// password
// input

// submit

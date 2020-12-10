import React, { useState } from 'react';
import api from './../Api/Api';

const Login = () => {
  const [state, setState] = useState({ username: '', password: '' });
  const [pendingLogin, setPendingLogin] = useState(false);
  const handleInputChange = (target: any) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleLoginClick = (credentials: any) => {
    setPendingLogin(true);
    api
      .login(credentials)
      .then((res) => console.log('success!'))
      .catch((e) => console.log('failed!'))
      .finally(() => setPendingLogin(false));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-6">
        <h4>Login</h4>
        <hr />
        <p>
          <b>Welcome to gamuko!</b> Login in below to start managing your Music
          and Game collections.
        </p>
        <hr />
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            name="username"
            onChange={(e) => handleInputChange(e.target)}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={(e) => handleInputChange(e.target)}
          ></input>
        </div>
        <div className="footer text-right">
          <hr />
          <button className="btn btn-link mr-2">Register</button>
          <button
            className="btn btn-primary"
            onClick={() => handleLoginClick(state)}
            disabled={pendingLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

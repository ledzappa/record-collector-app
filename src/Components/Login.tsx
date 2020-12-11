import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from './../Api/Api';

const Login = () => {
  const [state, setState] = useState({ username: '', password: '' });
  const [pendingLogin, setPendingLogin] = useState(false);
  const history = useHistory();
  const handleInputChange = (target: any) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleLoginClick = (credentials: any) => {
    setPendingLogin(true);
    return api
      .login(credentials)
      .then((res) => history.push('/collections'))
      .catch((e) => console.log('failed!'))
      .finally(() => setPendingLogin(false));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-6 pt-5 mt-5">
        <h4>Login</h4>
        <hr />
        <p>
          <b>Welcome to gamuko!</b> Login in below to start managing your Music
          and Game collections.
        </p>
        <div className="alert alert-danger alert-icon">
          This is a mocked front end application for demonstration purposes.
          Back end services are under development.
        </div>
        <hr />
        <div className="form-group">
          <label>Username</label>
          <input
            autoComplete="off"
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

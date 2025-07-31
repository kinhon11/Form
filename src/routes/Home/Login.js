import React from 'react';
import Login from '../../components/Function/Login';

const LoginPage = ({ onLogin }) => {
  console.log('LoginPage component rendered');
  return (
    <div className="login-page">
      <Login onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;

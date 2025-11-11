import React, { useState, useEffect } from 'react';
import { mockUsers } from '../api/mock';
import LoginForm from './components/LoginForm';

interface SigninProps {
  onLogin: () => void;
}

const Signin = ({ onLogin }: SigninProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (email === '') {
      setEmailError(null);
    } else if (!email.endsWith('@latitude.com')) {
      setEmailError('please input a valid email');
    } else {
      setEmailError(null);
    }
  }, [email]);

  const handleLogin = () => {
    setIsLoading(true);
    setFormError(null);

    if (!email.endsWith('@latitude.com')) {
      setFormError('Invalid email');
      setIsLoading(false);
      return;
    }

    const user = mockUsers.find((u) => u.email === email && u.password === password);

    if (!user) {
      setFormError('Invalid email or password.');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      onLogin();
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/2 bg-[#77003B] flex flex-col items-center justify-center p-12 text-white">
        <img src="/images/logo2.png" alt="Latitude Logo" className="h-44 mb-6" />
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center p-12 bg-[#fdf5f7]">
        <LoginForm
          email={email}
          onEmailChange={setEmail}
          password={password}
          onPasswordChange={setPassword}
          emailError={emailError}
          formError={formError}
          isLoading={isLoading}
          onLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default Signin;
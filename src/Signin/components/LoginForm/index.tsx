import React from 'react';
import InputField from '../InputField';
import Button from '../Button';

interface LoginFormProps {
  email: string;
  onEmailChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  emailError: string | null;
  formError: string | null;
  isLoading: boolean;
  onLogin: () => void;
}

const LoginForm = ({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  emailError,
  formError,
  isLoading,
  onLogin,
}: LoginFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      <h2 className="text-3xl font-bold text-[#77003B]">Sign In</h2>

      {formError && <p className="text-red-600 text-sm">{formError}</p>}

      <div className="space-y-4">
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="valid email"
          error={emailError}
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          placeholder="password"
          showPasswordToggle
        />

        <div className="text-right">
          <a href="/" className="text-sm text-[#77003B] hover:underline">
            Forgot password?
          </a>
        </div>
      </div>

      <Button type="submit" disabled={isLoading || !!emailError || !email || !password}>
        {isLoading ? 'Signing in...' : 'Sign In'}
      </Button>
    </form>
  );
};

export default LoginForm;
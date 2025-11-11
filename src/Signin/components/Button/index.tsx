import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, type = 'button', disabled = false, onClick }: ButtonProps) => {
  return (
    <MuiButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      fullWidth
      sx={{
        backgroundColor: '#77003B',
        color: 'white',
        py: 1.5,
        fontWeight: 'bold',
        fontSize: '1rem',
        '&:hover': {
          backgroundColor: '#9b004d',
        },
        '&:disabled': {
          backgroundColor: '#d1d5db',
          color: '#9ca3af',
        },
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
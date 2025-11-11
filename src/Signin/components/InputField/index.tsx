import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { TextField } from '@mui/material';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string | null;
  showPasswordToggle?: boolean;
}

const InputField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  error,
  showPasswordToggle = false,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPasswordToggle && type === 'password'
    ? showPassword ? 'text' : 'password'
    : type;

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="space-y-2">
      <TextField
        label={label}
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={!!error}
        helperText={error}
        fullWidth
        variant="outlined"
        size="medium"
        InputProps={
          showPasswordToggle
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : undefined
        }
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: error ? '#ef4444' : '#77003B',
            },
            '&:hover fieldset': {
              borderColor: error ? '#f87171' : '#77003B',
            },
            '&.Mui-focused fieldset': {
              borderColor: error ? '#ef4444' : '#77003B',
              borderWidth: '2px',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#77003B',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#77003B',
          },
          '& .MuiFormHelperText-root': {
            color: '#ef4444',
          },
        }}
      />
    </div>
  );
};

export default InputField;
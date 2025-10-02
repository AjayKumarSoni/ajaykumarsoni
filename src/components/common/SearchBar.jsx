import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ value, onChange, onSearch, placeholder = 'Search...', size = 'medium', sx }) {
  return (
    <TextField
      fullWidth
      size={size}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      sx={sx}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          onSearch && (
            <InputAdornment position="end">
              <IconButton onClick={() => onSearch(value)}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        )
      }}
    />
  );
}

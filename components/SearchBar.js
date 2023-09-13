import { Input } from '@chakra-ui/react';

const SearchBar = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      placeholder="Search users..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;

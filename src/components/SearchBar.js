import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../components/redux/action';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(search(query));
  };

  return (
    <div className="search-bar">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;

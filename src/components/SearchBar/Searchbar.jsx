import React, { useState } from 'react';
import { SearchFormStyled, SearchInputStyled } from './Searchbar.styled';

function Searchbar({ query, onChange }) {
  const [valueQuery, setValueQuery] = useState(query);

  const changeHandler = evt => {
    setValueQuery(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    onChange(valueQuery);
  };

  return (
    <div>
      <SearchFormStyled onSubmit={onSubmit}>
        <SearchInputStyled
          type="text"
          name="query"
          placeholder="What will we watch today?... "
          value={valueQuery}
          onChange={changeHandler}
        />
      </SearchFormStyled>
    </div>
  );
}

export default Searchbar;

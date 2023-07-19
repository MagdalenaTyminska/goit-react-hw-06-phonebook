import React from 'react';
import css from './Filter.module.css';

const Filter = ({ filter, handleSearch }) => {
  return (
    <>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={handleSearch}
      />
    </>
  );
};

export default Filter;

import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleSearch = event => {
    const { value } = event.target;
    dispatch(filterContact(value));
  };

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

// import React from 'react';
// import css from './Filter.module.css';

// const Filter = ({ filter, handleSearch }) => {
//   return (
//     <>
//       <p className={css.filterTitle}>Find contacts by name</p>
//       <input
//         className={css.filterInput}
//         type="text"
//         value={filter}
//         onChange={handleSearch}
//       />
//     </>
//   );
// };

// export default Filter;

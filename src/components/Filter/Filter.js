import css from './Filter.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/Selectors';
import { setNameFilterAction } from 'redux/FilterSlice';
export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChange = evt => {
    const { value, name } = evt.target;
    if (name === 'filter') {
      dispatch(setNameFilterAction(value));
    }
  };
  const filterId = nanoid();
  return (
    <div className={css.filter}>
      <label htmlFor={filterId}>Find Contact By Name</label>
      <input
        id={filterId}
        value={filter}
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </div>
  );
};

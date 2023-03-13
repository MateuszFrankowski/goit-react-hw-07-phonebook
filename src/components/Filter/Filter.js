import css from './Filter.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
// import { setNameFilterAction } from 'redux/Actions';
import { setNameFilterAction } from 'redux/FilterSlice';
export const Filter = () => {
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
      <input id={filterId} type="text" name="filter" onChange={handleChange} />
    </div>
  );
};

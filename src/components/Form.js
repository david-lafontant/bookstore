import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';

const Form = () => {
  const initialFormState = {
    title: '',
    author: '',
    category: '',
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: [e.target.value],
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();
    document.querySelector('form').reset();

    const newBook = {
      id: uuidv4(),
      title: formState.title[0],
      author: formState.author[0],
      category: formState.category[0],
    };

    dispatch(postBook(newBook));
  };

  const categoriesArr = [
    'Novel',
    'Essay',
    'History',
    'Biography',
    'Litterature',
  ];

  return (
    <form onSubmit={submitBookToStore} className="form-container">
      <h2>ADD NEW BOOK</h2>
      <div className="form-input">
        <input
          name="title"
          type="text"
          onChange={handleChange}
          placeholder="Book Title"
          required
        />
        <input
          name="author"
          type="text"
          onChange={handleChange}
          placeholder="Book Author"
          required
        />
        <select name="category" id="categories" onChange={handleChange} required>
          <option value="">Categories</option>
          {
            categoriesArr.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>

        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default Form;

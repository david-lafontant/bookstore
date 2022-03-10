import React from 'react';

const Form = () => (
  <section className="form-container">
    <h2>ADD NEW BOOK</h2>
    <div className="form-inputs">
      <input type="text" placeholder="Book title" required />
      <select name="categories" id="categories">
        <option value="Category 1">Novel</option>
        <option value="Category 2">Essay</option>
        <option value="Category 3">History</option>
        <option value="Category 2">Biography</option>
        <option value="Category 3">LItterature</option>
      </select>
      <button type="button">ADD BOOK</button>
    </div>
  </section>
);

export default Form;

import { useSelector } from 'react-redux';
import ItemBook from './ItemBook';
import Form from './Form';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);

  return (
    <section className="container">
      <div>
        {bookList.map((book) => (
          <ItemBook
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            categories={book.category}
          />
        ))}
      </div>
      <Form />
    </section>
  );
};

export default Books;

import ItemBook from './ItemBook';
import Form from './Form';

const Books = () => (
  <section className="container">
    <div>
      <ItemBook
        title="A Farewell to Arms"
        author="Ernest Hemingway"
        categories="Novel"
      />
      <ItemBook
        title="The Name of the Rose"
        author="Umberto Eco"
        categories="Novel"
      />
      <ItemBook
        title="ALLAH IS NOT OBLIGED"
        author="Ahmadou Kourouma"
        categories="Novel"
      />
    </div>
    <Form />
  </section>
);

export default Books;

import { useState, ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import { FormSearchProps } from '../../types/index';

const FormSearch = ({ setSearchValue }: FormSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTimeoutId, setSearchTimeoutId] = useState<null | number>(null);
  const timeout = 300;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newSearchQuery = e.target.value
    setSearchQuery(newSearchQuery);

    if (searchTimeoutId) {
      clearTimeout(searchTimeoutId);
    }
    const newTimeoutId = setTimeout(() => setSearchValue(newSearchQuery), timeout);
    setSearchTimeoutId(newTimeoutId);
  };

  return (
    <Form className="d-flex mb-3">
      <Form.Control
        type="search"
        placeholder="поиск постов"
        className="me-2"
        aria-label="поиск постов"
        value={searchQuery}
        onChange={handleChange}
      />
    </Form>
  );
};

export default FormSearch;


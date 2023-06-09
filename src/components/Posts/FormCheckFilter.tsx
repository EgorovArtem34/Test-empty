import { FormCheck } from 'react-bootstrap';
import { FormCheckFilterProps } from '../../types';

const FormCheckFilter = ({ isSortedActive, setIsSortedActive }: FormCheckFilterProps) => {

  const handleSorted = () => {
    setIsSortedActive(!isSortedActive);
  };

  return (
    <FormCheck
      type="checkbox"
      id="sortByTitle"
      label="Сортировать по заголовку поста"
      checked={isSortedActive}
      onChange={handleSorted}
      className="mb-3"
    />
  )
};
export default FormCheckFilter;


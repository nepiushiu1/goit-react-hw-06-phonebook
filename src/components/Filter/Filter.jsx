import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);

  const updateFilter = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => {
          updateFilter(e.target.value);
        }}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

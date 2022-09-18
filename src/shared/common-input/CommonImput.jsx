import css from './CommonImput.module.scss';

function CommonImput({ id, label, type, name, required }) {
  return (
    <label>
      <input
        className={css.phoneBook_input}
        type="text"
        name="name"
        //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Alice Cooper"
        value={name}
        // onChange={chngeInput}
      />
    </label>
  );
}

export default CommonImput;

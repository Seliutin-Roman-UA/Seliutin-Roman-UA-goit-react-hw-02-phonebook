import { Component } from 'react';

export class ContactForm extends Component {
  state = { name: '', number: '' };

  changeElement = event => {
    const fromAttName = event.target.name;
    this.setState({ [fromAttName]: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();    
    this.props.addContact(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.changeElement}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.changeElement}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

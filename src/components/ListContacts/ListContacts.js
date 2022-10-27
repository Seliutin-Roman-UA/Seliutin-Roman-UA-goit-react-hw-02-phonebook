import { Contact } from 'components/Contact/Contact';

export function ListContacts({ filtredContacts, delContact }) {
  if (filtredContacts.length === 0) return <p>NOTHING IS FOUND</p>;
  return (
    <ul>
      {filtredContacts.map(el => (
        <Contact key={el.id} element={el} delContact={delContact} />
      ))}
    </ul>
  );
}

export function Contact({ element: { id, name, number }, delContact }) {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => delContact(id)}>
        Delete
      </button>
    </li>
  );
}

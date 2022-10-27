export function Filter({ value, onChange, onClick }) {
  return (
    <div>
      <label>
        Find contact by name
        <input type="text" value={value} name="filter" onChange={onChange} />
      </label>
      <button type="button" onClick={onClick}>
        x
      </button>
    </div>
  );
}

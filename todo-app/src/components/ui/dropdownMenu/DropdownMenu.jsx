import './DropdownMenu.css';

const DropdownMenu = ({ id, value, options, handleChange }) => {
  return (
    <select
      id={id}
      style={{ textAlign: 'center' }}
      className="dropdown"
      value={value}
      onChange={handleChange}
    >
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;

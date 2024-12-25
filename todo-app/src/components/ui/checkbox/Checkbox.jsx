import './Checkbox.css';

const Checkbox = ({ id, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}></label>
    </div>
  );
};

export default Checkbox;

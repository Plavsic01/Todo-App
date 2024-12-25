import './FilterPanel.css';
import DropdownMenu from '../ui/dropdownMenu/DropdownMenu';

const FilterPanel = ({ filter, filterValue }) => {
  const handleValueChange = (e) => {
    const val = e.target.value;
    if (e.target.id === 'filter') {
      filter(val);
    }
  };

  return (
    <div className="sort-filter-container">
      <div>
        <h2 style={{ textAlign: 'center' }}>Filter</h2>

        <DropdownMenu
          id="filter"
          value={filterValue}
          options={[
            { name: 'Show all', value: 'all' },
            { name: 'Show completed', value: 'completed' },
          ]}
          handleChange={handleValueChange}
        />
      </div>
    </div>
  );
};

export default FilterPanel;

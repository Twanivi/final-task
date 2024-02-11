import './Select.css';

export const Select = ({ options, updateState }) => {
    const selectChangeHandler = (event) => {
      updateState(event.target.value);
    };
  
    const selectOptions = options.map((option) => (
      <option value={option} key={option}>
        {option}
      </option>
    ));
    return (
      <div className='selects'>
        <select onChange={selectChangeHandler} className="select">
          {selectOptions}
        </select>
      </div>
    );
  };
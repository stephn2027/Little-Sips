import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function FilterList(props) {
  const { types, textProperty, valueProperty, onTypeSelect,selectedCoffeeType} = props;
  
  return (
    <React.Fragment>
      <ul className="list-group list-group-horizontal">
        {types.map((type,i) => (
          <li
          key={i} 
          className={type===selectedCoffeeType?"list-group-item active":"list-group-item"}
          onClick={()=>onTypeSelect(type)}
          >
            {type[textProperty]}
          
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

FilterList.defaultProps={textProperty:"name",valueProperty:'id'};
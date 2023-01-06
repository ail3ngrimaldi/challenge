import items from '../db.json'

export const Select = (props) =>
  <select className='input__form' label={items.items[3].label} onChange={props.handleInputChange} >{
    items.items[3].options.map( (i) => 
      <option  key={i.value}>{i.label}</option> )
  }</select>;
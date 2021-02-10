import React from 'react';

const BasicInfoForm = ({name, handleChange, location , phone }) => (
    <div>
            <label> Name
            <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            required
            >
            </input>
          </label>

          <label> Location
           <select 
           name="location" 
           value={location} 
           onChange={handleChange}>
           <option id="empty" ></option>
            <option id="Barcelona" >Barcelona</option>
            <option id="Paris" >Paris</option>
            <option id="London" >London</option>
          </select>
          </label>

          <label> Phone Number
            <input
            name="phone"
            type="text"
            value={phone}
            onChange={handleChange}
            required
            >
            </input>
          </label>

          </div>
  );
  
  export default BasicInfoForm
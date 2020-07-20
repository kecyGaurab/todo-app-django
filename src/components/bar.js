import React from 'react';

const Bar = (props) => {
  const { onInputChange, onSubmit, newTodo } = props;
  return (
    <form className="wrapper" style={{ 'grid-template-columns': '7fr 2fr' }} onSubmit={onSubmit}>
      <input placeholder="Add new todo" value={newTodo.name} onChange={onInputChange} />
      <button className="btn btn-success" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default Bar;

import React from 'react';


function History(props) {
  return (
    <>
    <h1> History </h1>
      {props.data ? props.map(() => {
         <p> stuff </p>
      }
        
      )
      : null}
    </>
);
}

export default History;

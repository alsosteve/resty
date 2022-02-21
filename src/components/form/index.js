import React from 'react';
import { useState } from 'react';
import './form.scss';

// class component
// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// functional component
function Form(props) {

  
  // // hard coded string values:
  // let handleSubmit = e => {
  //   e.preventDefault();
  //   const formData = {
  //     method:'GET',
  //     url: 'https://pokeapi.co/api/v2/pokemon',
  //   };
  //   props.handleApiCall(formData);
  // }

  // Refactor the Form Component to implement user input from form elements
  let [method, setMethod] = useState({}); 
  let [url, setUrl] = useState({}); 

  const handleMethod = e => {
    e.preventDefault();
    setMethod(e.target.id);
  }

  const handleUrl = e => {
    e.preventDefault();
    setUrl(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
      const formData = {
        method,
        url,
      };
      props.handleApiCall(formData);
  }

  return (
  <>
    <form onSubmit={handleSubmit}>
      <label >
        <span>URL: </span>
        <input onChange={handleUrl} name='url' type='text' />
        <button type="submit">GO!</button>
      </label>
      <label onClick={handleMethod} className="methods">
        <span id="get">GET</span>
        <span id="post">POST</span>
        <span id="put">PUT</span>
        <span id="delete">DELETE</span>
      </label>
    </form>
    </>
  );

}

export default Form;

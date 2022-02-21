import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
   //  implement the useState react API hook
   let [data, setData] = useState({}); 
   let [requestParams, setRequestParams] = useState({}); 

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     requestParams: {},
  //   };
  // }

  let callApi = async (requestParams) => {
    // // mock output
    // let newData = {
    //   count: 2,
    //   results: [
    //     {name: 'fake thing 1', url: 'http://fakethings.com/1'},
    //     {name: 'fake thing 2', url: 'http://fakethings.com/2'},
    //   ],
    setRequestParams(requestParams);
    await axios.get(requestParams.url)
    .then((json) => {
      setData(json)

    })
    .catch((e) => {
      console.log('Error', e);
      setData('Invalid URL');
    });
    };

    // // Refactor any components using this.setState
    // this.setState({data, requestParams});
    
    // setData(newData);
    
  

 
  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
  
}

export default App;

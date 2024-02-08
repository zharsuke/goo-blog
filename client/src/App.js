import React, {useEffect, useState} from 'react';
import Index from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // const [getData, setData] = useState({});

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //     }
  //   );
  // }, []);

  return (
    <div>
      {/* {(typeof getData === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        <p>{getData.message}</p>
      )} */}

      <Index/>

    </div>
  )
}

export default App;
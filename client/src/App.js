import React, {useEffect, useState} from 'react';

function App() {

  const [getData, setData] = useState({});

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setData(data)
      }
    );
  }, []);

  return (
    <div>
      {(typeof getData === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        <p>{getData.message}</p>
      )}

    </div>
  )
}

export default App;
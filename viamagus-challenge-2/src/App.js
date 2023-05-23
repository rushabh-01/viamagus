import { useState, useEffect } from 'react';
import './App.css';
import Video from './component/Video';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating video loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function to cancel the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-text">Loading...</div>
      ) : (
        <Video />
      )}
    </div>
  );
}

export default App;

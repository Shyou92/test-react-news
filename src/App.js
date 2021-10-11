import { useState, useLayoutEffect } from 'react'
import Preloader from './components/Preloader/Preloader';
import Scrollable from './components/Scrollable/Scrollable';
import News from './components/News/News';

function App() {
  const [isLoading, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    setIsLoaded(true);
  }, []);

  setInterval(() => setIsLoaded(false), 3500);

  return (
    <div className="App">
      {isLoading ? <Preloader/> :
      <>
        <h2 className="header">Gatsby News</h2>
        <hr className="line"/>
        
        <div className='container'>
          <Scrollable class='items'>
            <News />
          </Scrollable>
        </div>
      </>
}
    </div>
  )
}

export default App;

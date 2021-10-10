import News from './components/News/News';
import { useState } from 'react'
import Preloader from './components/Preloader/Preloader';
import Scrollable from './components/Scrollable/Scrollable';

function App() {
  const [loading, setIsLoading] = useState(true);

  function loadPage() {
    setIsLoading(false);
  }

  setTimeout(() => loadPage(), 500);

  return (
    <div className="App">
      {loading ? <Preloader/> :
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

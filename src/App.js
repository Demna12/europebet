import './App.css';
import { Banner } from './components/Banner';
import { GameTabs } from './components/GameTabs';
import { Terms } from './components/Terms';
import { Actions } from './components/Actions';
import { Sticky } from './components/Sticky';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="main-content">
          <Banner />
          <GameTabs />
          <Terms />
          <Actions />
          <Sticky />
        </div>
      </div>
    </div>
  );
}

export default App;

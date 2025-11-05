import Hello from './components/Hello.jsx';
import Counter from './components/Counter.jsx';
import ActionPanel from './components/ActionPanel.jsx';
import FaveSong from './components/FaveSong.jsx';
import MoodToggle from './components/MoodToggle.jsx';

function App() {
  return (
    <div>
      <h1>My First React App</h1>
      <Hello name="Jessa"/>
      <Counter />
      <ActionPanel />
      <FaveSong />
      <MoodToggle />
    </div>
  );
}

export default App;

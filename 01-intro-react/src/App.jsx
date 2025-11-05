import Hello from './components/Hello.jsx';
import Counter from './components/Counter.jsx';
import ActionPanel from './components/ActionPanel.jsx';
import FaveSong from './components/FaveSong.jsx';
import MoodToggle from './components/MoodToggle.jsx';
import LikeCard from './components/LikeCard.jsx';

function App() {
  return (
    <div>
      <h1>My First React App</h1>
      <Hello name="Jessa"/>
      <Counter />
      <ActionPanel />
      <FaveSong />
      <MoodToggle />
      <LikeCard 
      name = "Jessa Gozun"
      age = {20}
      motto = "Never stop learning!"
      />
    </div>
  );
}

export default App;

import Hello from './components/Hello.jsx';
import Counter from './components/Counter.jsx';
import ActionPanel from './components/ActionPanel.jsx';
import FaveSong from './components/FaveSong.jsx';
import MoodToggle from './components/MoodToggle.jsx';
import LikeCard from './components/LikeCard.jsx';
import StudentCard from './components/StudentCard.jsx';
import StudentsList from './components/StudentsList.jsx';
import ProductList from './components/ProductList.jsx';

function App() {
  return (
    <div>
      <h1>My First React App</h1>
      <Hello name="Jessa"/>
      <hr />
      <Counter />
      <hr />
      <ActionPanel />
      <hr />
      <FaveSong />
      <hr />
      <MoodToggle />
      <hr />
      <LikeCard 
      name = "Jessa Gozun"
      age = {20}
      motto = "Never stop learning!"
      />
      <hr />
      <StudentCard
      name = "Taylor"
      course = "BS Information Technology"
      />
      <hr />

      <StudentsList />
      <hr />

      <ProductList />

    </div>
  );
}

export default App;

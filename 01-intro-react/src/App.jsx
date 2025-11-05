import Hello from './components/Hello.jsx';
import Counter from './components/Counter.jsx';
import ActionPanel from './components/ActionPanel.jsx';

function App() {
  return (
    <div>
      <h1>My First React App</h1>
      <Hello name="Jessa"/>
      <Counter />
      <ActionPanel />
    </div>
  );
}

export default App;

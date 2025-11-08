import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  // Add task
  const addTask = () => {
    if (name.trim() === "") return;

    const newTask = {
      id: Date.now(),
      name: name
    };

    setTasks([...tasks, newTask]);
    setName("");
  };

  // Remove task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  //Saving once Enter is pressed in edit mode
  const handleKeyDown = (e) =>  {
    if (e.key === "Enter") {
      e.preventDefault();
      setTasks(tasks.map(task => task.id === editingId ? {...task, name: editedName}: task));
      setEditingId(null);
    }
  };

  return (
    <div>
      <h2>To-Do Tasks</h2>

      <form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
        <input
          type="text"
          placeholder="Task name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <hr />

      <ul>
        {tasks.length === 0 
        ? ("🧚🏻‍♂️ You don't have a task yet...") 
        : (tasks.map((task) => (
            <li key={task.id}>
              {editingId === task.id 
              ? (
                <input
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={() => {
                    // Update task name and exit edit mode
                    setTasks(tasks.map(task => task.id === editingId ? { ...task, name: editedName } : task));
                    setEditingId(null);
                  }}
                />
              ) 
              : (
                <span onClick={() => { 
                  setEditingId(task.id); 
                  setEditedName(task.name); 
                }}>{task.name}</span>
              )}
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskList;

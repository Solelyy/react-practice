import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  // Add task
  const addTask = () => {
    if(!name.trim()) return;
    setTasks([...tasks, 
      {id: Date.now(), name, completed: false}
    ]);
    setName("");
  };

  //Remove task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !==id));
  };

  //Start editing task
  const startEdit = (id, currentName) => {
    setEditingId(id);
    setEditedName(currentName);
  };

  const handleEditChange = (e) => {
    setEditedName(e.target.value )
  };

  const handleEditKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveEdit();
    }
  };

  const saveEdit = () => {
    setTasks(tasks.map(task =>
      task.id === editingId ? {...task, name: editedName} : task
    ));
    setEditingId(null);
  };

  //Toggle if complete or not
  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed}
      : task
    ));
  };

  return (
    <div>
      <h2>To-do Task</h2>

      <TaskForm 
        name = {name}
        onChange = {(e) => setName(e.target.value)}
        onSubmit={(e) => {e.preventDefault(); addTask();}}
      />

      <hr />

      {tasks.length === 0 ? (
        <p>🧚🏻‍♂️ You haven't added a task yet...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              isEditing={editingId === task.id}
              editedName={editedName}
              onEdit={startEdit}
              onChange={handleEditChange}
              onKeyDown={handleEditKeyDown}
              onBlur={saveEdit}
              onRemove={removeTask}
              onToggle = {toggleTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;

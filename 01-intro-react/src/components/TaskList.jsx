import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";

function TaskList() {

  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [filter, setFilter] = useState("All");

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

  //Filter tasks
  const filteredTask = tasks.filter((task) =>  {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Active") return !task.completed;
  });

  //Save on sessionStorage
  //show on first load (mount)
  useEffect(() => {
    const savedTasks = sessionStorage.getItem("tasks");
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  //save to sessionStorage every time the tasks changes
  useEffect(() => {
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h2>To-do Task</h2>

      <TaskForm 
        name = {name}
        onChange = {(e) => setName(e.target.value)}
        onSubmit={(e) => {e.preventDefault(); addTask();}}
      />

      <TaskFilter 
      currentFilter={filter} onChangeFilter={setFilter}
      />

      {filteredTask.length === 0 ? (
        <p>🧚🏻‍♂️ Nothing to show yet...</p>
      ) : (
        <ul>
          {filteredTask.map((task) => (
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

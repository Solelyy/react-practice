function TaskItem({task, isEditing, editedName, onEdit, onChange, onKeyDown, onBlur, onRemove, onToggle}) {
    return (
    <li style={{listStyle: "none"}}>
        {isEditing ? (
        <input
        type="text"
        value={editedName}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        autoFocus
        />
    ) : (
        <>
        <input 
        type="checkbox"
        checked = {task.completed}
        onChange={() => onToggle(task.id)}
        />
        <span onClick={() => onEdit(task.id, task.name)}
        style={{
            textDecoration:task.completed ? "line-through" : "none",
            color: task.completed ? "#888" : "inherit"
        }}   
        >
        {task.name}
        </span>
        </>
    )}
    <button onClick={() => onRemove(task.id)}>Remove</button>
    </li>
    );
}

export default TaskItem;
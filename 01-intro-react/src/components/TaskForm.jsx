function TaskForm({name, onChange, onSubmit}) {
    return (
        <form onSubmit= {onSubmit}>
            <input 
            type="text"
            placeholder="Task name"
            value={name}
            onChange={onChange}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;
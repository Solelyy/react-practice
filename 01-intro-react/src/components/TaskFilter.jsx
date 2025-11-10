function TaskFilter({currentFilter, onChangeFilter}){
    return (
        <div>
            {["All", "Active", "Completed"].map(f => (
                <button 
                key={f}
                onClick={() => onChangeFilter(f)} 
                style={{
                    fontWeight: currentFilter === f ? "bold" : "normal",
                    marginRight:"8px"
                    }
                }> 
                {f}
                </button>
            ))}
        </div>
    )
}

export default TaskFilter;
import "./TodoItem.css";

function TodoItem({ task, index, onDelete, onToggle }) {
    return (
        <li
            style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginBottom: "8px",
            }}
        >
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(index)}
            />
            {task.text}{" "}
            <button id="deletebutton" onClick={() => onDelete(index)}>❌</button>
        </li>
    );
}

export default TodoItem;

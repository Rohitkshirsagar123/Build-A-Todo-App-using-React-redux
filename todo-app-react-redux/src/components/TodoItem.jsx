import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes, FaEdit, FaSave } from 'react-icons/fa';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
  updateTodoText,
} from '../redux/actions';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleUpdate = () => {
    dispatch(updateTodoText(index, updatedText));
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    setUpdatedText(e.target.value);
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">
          {index + 1}.
        </span>
        {editMode ? (
          <input
            type="text"
            className="mr-4 border-b border-gray-500 focus:outline-none focus:border-blue-500"
            value={updatedText}
            onChange={handleInputChange}
          />
        ) : (
          <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className='space-x-3 ml-8'>
        {editMode ? (
          <button
            className="mr-2 text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={handleUpdate}
          >
            <FaSave />
          </button>
        ) : (
          <button
            className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => setEditMode(true)}
          >
            <FaEdit />
          </button>
        )}
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        <button
          className="text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        {!todo.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;

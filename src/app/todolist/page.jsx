'use client'
import React, { useState } from 'react';

function AdvancedTodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim(), completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f3f4f6' }}>
      <nav style={{ backgroundColor: 'white', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', height: '4rem', alignItems: 'center' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Advanced Todo List</h1>
          </div>
        </div>
      </nav>

      <main style={{ flexGrow: 1, maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
        <form onSubmit={addTodo} style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Add a new todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            style={{ flexGrow: 1, padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
          />
          <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}>
            Add Todo
          </button>
        </form>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {todos.map(todo => (
            <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ cursor: 'pointer' }}
              />
              <label style={{ flexGrow: 1, textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#6b7280' : '#1f2937' }}>
                {todo.text}
              </label>
              <button onClick={() => deleteTodo(todo.id)} style={{ padding: '0.25rem 0.5rem', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p style={{ textAlign: 'center', color: '#6b7280', marginTop: '2rem' }}>No todos yet. Add one above!</p>
        )}
      </main>

      <footer style={{ backgroundColor: 'white', boxShadow: '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06)', marginTop: '2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.5rem 1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
              © 2023 Advanced Todo List. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://github.com" style={{ color: '#9ca3af' }}>GitHub</a>
              <a href="https://twitter.com" style={{ color: '#9ca3af' }}>Twitter</a>
              <a href="https://linkedin.com" style={{ color: '#9ca3af' }}>LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AdvancedTodoList;
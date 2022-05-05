import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <div>
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} tareas   <i class="glyphicon glyphicon-thumbs-up"></i></h2>
    </div>
  );
}

export { TodoCounter };

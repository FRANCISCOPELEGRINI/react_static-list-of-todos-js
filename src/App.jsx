import './App.scss';
import { TodoList } from './components/TodoList';
import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';


function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}


export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));


export const App = () => (
  <div className="page">
    <div className="sidebar" data-cy="Sidebar">
      Sidebar
    </div>

    <div className="page-content">
      <TodoList todos={todos} />
    </div>
  </div>
);

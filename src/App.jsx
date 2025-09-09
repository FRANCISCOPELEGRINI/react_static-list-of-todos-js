import './App.scss';
import { TodoList } from './components/TodoList';
import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';


export const App = () => (
  <div className="page">
    <div className="sidebar" data-cy="Sidebar">
      Sidebar
    </div>

    <div className="page-content">
      <TodoList todos={todosFromServer} />
    </div>
  </div>
);

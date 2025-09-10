
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';
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


/*
Resumo da Revisão

O revisor está pedindo mudanças porque existem problemas críticos que violam requisitos explícitos da checklist e vão quebrar funcionalidades/testes.

Problemas Críticos a Corrigir

Nome de prop incorreto em TodoInfo (src/components/TodoInfo/TodoInfo.jsx)

O que/onde: O componente usa componentLista em vez de todo.

Por que: O requisito diz que TodoInfo deve aceitar uma prop todo e renderizar os detalhes da tarefa (incluindo estado de conclusão).

Como corrigir:

export const TodoInfo = ({ todo }) => ...


Atualizar todas as referências internas para todo.title, todo.completed, todo.user.

UserInfo não usado dentro de TodoInfo (src/components/TodoInfo/TodoInfo.jsx)

O que/onde: Em branches de completado e não-completado foi usado <a className="UserInfo">...</a> no lugar do componente UserInfo.

Por que: Requisitos dizem que UserInfo deve aceitar uma prop user e renderizar os detalhes, além de ser renderizado dentro de TodoInfo apenas se todo.user existir (renderização condicional).

Como corrigir:
Importar e renderizar condicionalmente:

{todo.user && <UserInfo user={todo.user} />}


Remover o <a>.

Nome de prop incorreto em UserInfo (src/components/UserInfo/UserInfo.jsx)

O que/onde: O componente aceita { usuario } e usa usuario.email / usuario.name.

Por que: O requisito diz que UserInfo deve aceitar user e renderizar os detalhes do usuário.

Como corrigir:

export const UserInfo = ({ user }) => ...


Atualizar referências para user.email e user.name.

Erro no import e prop em TodoList (src/components/TodoList/TodoList.jsx)

O que/onde:

import { TodoInfo } from './TodoInfo';


Caminho provavelmente errado; também está passando componentLista={todo} em vez de todo={todo}.

Por que: Caminho errado pode gerar erro de importação; prop errada quebra o requisito de API.

Como corrigir:
Ajustar importação (exemplo):

import { TodoInfo } from '../TodoInfo/TodoInfo';


Passar corretamente a prop:

<TodoInfo todo={todo} />

*/
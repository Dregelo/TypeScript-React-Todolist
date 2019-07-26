import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (i: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[i].complete = !newTodos[i].complete;
    setTodos(newTodos);
  };

  const removeTodo = (todoIndex: number): void => {
    const newTodos: ITodo[] = todos.filter((_, i: number) => todoIndex !== i);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, i: number) => (
          <Fragment key={i}>
            <div style={{ textDecoration: todo.complete ? 'line-trough' : '' }}>
              {todo.text}
            </div>
            <button type="button" onClick={() => completeTodo(i)}>
              {todo.complete ? 'Incomplete' : 'Complete'}
            </button>
            <button type="button" onClick={() => removeTodo(i)}>
              Remove
            </button>
          </Fragment>
        ))}
      </section>
    </>
  );
};

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);

export default App;

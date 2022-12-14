import { TodoItem } from "./TodoItem"

export const Todos = (props)=>{
  let todo = {
    id:props.todos.length+1,
    title:"",
    isDone:false
  }
    return (
      <div
        className='card mx-auto mt-4 shadow-lg main-container'
        style={{ width: '70vw', height: '90vh' }}
      >
        <h2 className='text-center shadow p-1 bg-purple text-white'>
          <i className='fas fa-clipboard-list'></i> ToDo
        </h2>
        <div className='row p-2'>
          <div className='col'>
            <input
              type='text'
              className='form-controol'
              placeholder='Add Todo'
              onKeyUp={(e) => {
                if (e.code === 'Enter') {
                  props.onAdd(todo);
                  e.target.value = '';
                }
              }}
              onChange={(e) => {
                todo.title = e.target.value;
              }}
            />
          </div>
          <div className='col-3 col-sm-1 my-auto'>
            <button
              className='bg-purple text-white btn'
              onClick={() => {
                props.onAdd(todo);
                document.querySelector('input').value = '';
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className='p-3'>
          {props.todos.length === 0
            ? 'No Taks...'
            : props.todos.map((todo) => {
                return (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={props.onDelete}
                    onDone={props.onDone}
                  />
                );
              })}
        </div>
      </div>
    );
}
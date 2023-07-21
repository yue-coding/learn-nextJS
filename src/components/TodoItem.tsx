"use client"

type TodoItemProps = {
    id: String
    title: String
    done: Boolean
    toggleTodo: (id: String, done: Boolean) => void
}


export function TodoItem({ id, title, done, toggleTodo}: TodoItemProps) {
  return (
    <li className="flex gap-1 border border-slate-300 px-2 py-1 rounded my-2">
        <input id ={id} type="checkbox" className="cursor-pointer peer" defaultChecked={done} onChange={e=> toggleTodo(id, e.target.checked)}/>
        <label htmlFor={id} className=" peer-checked:text-slate-500
        cursor-pointer peer-checked:line-through">
            {title}
        </label>
    </li>
  );
}
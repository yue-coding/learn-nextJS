type TodoItemProps = {
    id: String
    title: String
    done: Boolean
}

export function TodoItem({ id, title, done }: TodoItemProps) {
  return (
    <li className="flex gap-1 border border-slate-300 px-2 py-1 rounded my-2">
        <input id ={id} type="checkbox" className="cursor-pointer peer" />
        <label htmlFor={id} className=" peer-checked:text-slate-500
        cursor-pointer peer-checked:line-through">
            {title}
        </label>
    </li>
  );
}
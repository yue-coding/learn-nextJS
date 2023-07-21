import Link from "next/link";
import {prisma} from "@/db";
import {TodoItem} from "@/components/TodoItem";

function getTodos() {
    return prisma.todo.findMany()
}

async function toggleTodo (id: String, done: Boolean) {
    "use server";
    console.log(id, done)
    await prisma.todo.update({where:{id:id}, data:{done:done}})
}

export default async function Home() {
    const todos = await getTodos()

    return (
        <>
            <header className="flex justify-between mb-4 items-center">
                <h1 className="text-2xl">To dos</h1>
                <Link className="border border-slate-300 px-2 py-1 rounded
            hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href={"/new"}>New</Link>
            </header>
            <ul>
                {todos.map((todo) => (
                    <TodoItem id={todo.id} title={todo.title} done={todo.done} toggleTodo={toggleTodo}/>
                ))}
            </ul>
        </>
    );
}
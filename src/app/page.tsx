import Link from "next/link";
import {prisma} from "@/db";

function getTodos() {
    return prisma.todo.findMany()
}

export default async function Home() {
    const todos = await getTodos()

    return (
        <>
            <header className="flex justify-between mb-4 items-center">
                <h1 className="text-2xl">To dos</h1>
                <Link className="border border-slate-300 px-2 py-1 rounded
            hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href={"/"}>Home</Link>
            </header>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="border border-slate-300 px-2 py-1 rounded">
                       {todo.title}
                    </li>
                ))}
            </ul>
        </>
    );
}
import Link from "next/link";
import {prisma} from "@/db";
import {redirect} from "next/navigation";

async function createTodo(data: FormData) {
    "use server";
    console.log(data)
    const title = data.get("title").valueOf()
    if(typeof title!=="string" ||title.length===0) throw new Error("title is not valid")
    await prisma.todo.create({data:{title:title, done:false}})
    redirect("/")
}

export default function Page() {

    return (
        <>
            <header className="flex justify-between mb-4 items-center">
                <h1 className="text-2xl">New</h1>
            </header>
            <form action={createTodo} className="flex gap-2 flex-col">
               <input type="text" name={"title"} className="border border-slate-300 bg-transparent
               rounded px-2 py-1outline-none focus-within:border-slate-100"></input>
                <div className="flex gap-1 justify-end my-2">
                    <Link href={".."} className="border border-slate-300 px-2 py-1 rounded
            hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Cancel</Link>
                    <button className="border border-slate-300 px-2 py-1 rounded
            hover:bg-slate-700 focus-within:bg-slate-700 outline-none" type="submit">Create</button>
                </div>
            </form>

        </>
    )
}
import Link from "next/link";
import {redirect} from "next/navigation";

import api from "@/app/lib/api";
import Card from "@/app/ui/Card";

export default async function Home({searchParams}: {searchParams: {q: string}}) {
  const restaurants = await api.search(searchParams.q);

  async function searchAction(formData: FormData) {
    "use server";

    redirect(`/?q=${formData.get("query")}`);
  }

  return (
    <section>
      <form action={searchAction} className="mb-4 inline-flex gap-2">
        {/* Inicializamos el input para que contenga el valor actual de la query */}
        <input
          autoComplete="off"
          className="rounded-xl border-[1px] border-slate-400 px-2"
          defaultValue={searchParams.q || ""}
          name="query"
          placeholder="Search place..."
        />
        <button
          className="rounded-xl bg-white p-2 font-bold text-black hover:bg-white/80"
          type="submit"
        >
          Search
        </button>
      </form>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => {
          return (
            <Link key={restaurant.id} href={`/${restaurant.id}`} prefetch={false}>
              <Card {...restaurant} />
            </Link>
          );
        })}
      </section>
    </section>
  );
}

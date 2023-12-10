import api from "@/app/lib/api";
import Card from "@/app/ui/Card";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home({ searchParams }: { searchParams: {q: string}}) {
  const restaurants = await api.search(searchParams.q);

  async function searchAction(formData: FormData) {
    "use server"

    redirect(`/?q=${formData.get('query')}`);
  }

  return (
    <section>
      <form action={searchAction} className="inline-flex gap-2 mb-4">
        {/* Inicializamos el input para que contenga el valor actual de la query */}
        <input
          autoComplete="off"
          defaultValue={searchParams.q || ""}
          className="px-2 rounded-xl"
          name="query"
        />
        <button
          type="submit"
          className="p-2 bg-white/20 rounded-xl hover:bg-white/30"
        >
          Search
        </button>
      </form>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => {
          return (
            <Link
              href={`/${restaurant.id}`}
              prefetch={false}
              key={restaurant.id}
            >
              <Card {...restaurant} />
            </Link>
          );
        })}
      </section>
    </section>
  );
}

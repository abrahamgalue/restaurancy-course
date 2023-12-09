import api from "@/app/lib/api";
import Card from "@/app/ui/Card";
import Link from "next/link";
import SearchBox from "@/app/ui/SearchBox";

export default async function Home({ searchParams }: { searchParams: {q: string}}) {
  const restaurants = await api.search(searchParams.q);

  return (
    <section>
      <SearchBox />
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => {
        return (
          <Link href={`/${restaurant.id}`} prefetch={false} key={restaurant.id}>
              <Card {...restaurant} />
          </Link>
        );
      })}
      </section>
    </section>
  );
}

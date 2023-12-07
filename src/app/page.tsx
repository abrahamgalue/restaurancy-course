import api from "@/api";
import Card from '@/app/components/Card'
import Link from "next/link";

export default async function Home() {
  const restaurants = await api.list();

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => {
        return (
          <Link href={`/${restaurant.id}`} prefetch={false} key={restaurant.id}>
              <Card {...restaurant} />
          </Link>
        );
      })}
    </section>
  );
}

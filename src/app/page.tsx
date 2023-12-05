import api from "@/api";
import Card from '@/app/components/Card'

export default async function Home() {
  const restaurants = await api.list();

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => {
        return (
          <article key={restaurant.id}>
            <Card {...restaurant} />
          </article>
        );
      })}
    </section>
  );
}

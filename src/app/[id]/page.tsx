import api from "@/app/lib/api";
import Card from '@/app/ui/Card'

export async function generateMetadata({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id)

  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
  }
}

export async function generateStaticParams() {
  const restaurants = await api.list();

  return restaurants.map((restaurant) => ({
    id: restaurant.id,
  }));
}

export default async function RestaurantPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const restaurant = await api.fetch(id);

  return (
      <Card {...restaurant} />
  );
}

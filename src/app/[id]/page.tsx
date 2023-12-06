import api from "@/api";
import Card from '@/app/components/Card'

export async function generateMetadata({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id)

  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
  }
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

'use client'

import { type Restaurant } from '@/app/lib/api'
import dynamic from 'next/dynamic';

function FavoriteButton({ restaurant }: { restaurant: Restaurant }) {
  const isFavourite = window.localStorage.getItem("favorites")?.includes(restaurant.id);

  return (
    <button
      type="button"
      className={`text-red-500 text-xl ${
        isFavourite ? "opacity-100" : "opacity-20"
      }`}
    >
      ♥
    </button>
  );
};

// Creamos un componente dinámico para que no se renderice en el servidor
const DynamicFavoriteButton = dynamic(async () => FavoriteButton, {ssr: false})

export default function Card(restaurant: Restaurant) {

  return (
    <article key={restaurant.id}>
      <img
        alt={restaurant.name}
        className="mb-3 h-[300px] w-full object-cover rounded-xl"
        src={restaurant.image}
      />
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <span>{restaurant.name}</span>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{restaurant.score}</span>
          <span className="font-normal opacity-75">({restaurant.ratings})</span>
        </small>
        <DynamicFavoriteButton restaurant={restaurant} />
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
    </article>
  );
}
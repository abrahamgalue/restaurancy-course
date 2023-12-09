'use client'

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Prevenimos que la página se refresque al enviar el formulario
    event.preventDefault();

    // Obtenemos el valor del input
    const query = event.currentTarget.query.value;

    if (query) {
      // Redireccionamos al index con una query
      router.push(`/?q=${query}`);
    } else {
      // Redireccionamos a la ruta principal
      router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="inline-flex gap-2 mb-4">
      {/* Inicializamos el input para que contenga el valor actual de la query */}
      <input autoComplete="off" defaultValue={searchParams.get('q') || ''} className="px-2 rounded-xl" name="query" />
      <button type="submit" className="p-2 bg-white/20 rounded-xl hover:bg-white/30">Search</button>
    </form>
  );
}
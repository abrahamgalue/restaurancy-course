import { type Restaurant } from '@/api'

export default function Card({ id, name, image, score, ratings, description }: Restaurant) {
  return (
    <article key={id}>
      <img
        alt={name}
        className="mb-3 h-[300px] w-full object-cover rounded-xl"
        src={image}
      />
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <span>{name}</span>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{score}</span>
          <span className="font-normal opacity-75">
            ({ratings})
          </span>
        </small>
      </h2>
      <p className="opacity-90">{description}</p>
    </article>
  )
}
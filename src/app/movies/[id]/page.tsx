import { MovieForm } from '@/components/movie-form'
import { prisma } from '@/lib/db'

type Props = {
  params: {
    id: string
  }
}

async function getMovie(id: string) {
  const movie = await prisma.movie.findFirstOrThrow({
    where: { id: +id },
  })

  return movie
}

const MoviePage = async ({ params: { id } }: Props) => {
  const movie = await getMovie(id)

  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">
        Movie details for: {movie.title}
      </h2>

      <MovieForm initialMovie={movie} />
    </main>
  )
}

export default MoviePage

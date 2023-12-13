import 'server-only'

import { GenreForm } from '@/components/genre-form'
import { prisma } from '@/lib/db'

type Props = {
  params: {
    id: string
  }
}

async function GenrePage({ params: { id } }: Readonly<Props>) {
  const genre = await prisma.genre.findFirstOrThrow({
    where: { id: +id },
  })

  return (
    <main className="container">
      <GenreForm genre={genre} />
    </main>
  )
}

export default GenrePage

import Image from 'next/image'
import { client } from '../../sanity/lib/client'

const scheduleQuery = `*[_type == "schedule"] | order(_updatedAt desc)[0] {
  title,
  description,
  scheduleImage {
    asset->{url},
    alt
  }
}`

async function getSchedule() {
  return await client.fetch(scheduleQuery)
}

export default async function SchedulePage() {
  const schedule = await getSchedule()

  if (!schedule?.scheduleImage?.asset?.url) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-bold mb-4">Schedule</h1>
          <p className="text-gray-600">
            No schedule image is available yet. Please add a Schedule document in Sanity Studio and upload the quarterly PNG.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-3">{schedule.title || 'Quarterly Schedule'}</h1>
          {schedule.description ? (
            <p className="mx-auto max-w-3xl text-gray-600">{schedule.description}</p>
          ) : null}
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-lg p-4">
          <Image
            src={schedule.scheduleImage.asset.url}
            alt={schedule.scheduleImage.alt || 'Quarterly schedule'}
            width={2400}
            height={1800}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </main>
  )
}

import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-08-15'})

function randomKey(length = 12) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let key = ''
  for (let i = 0; i < length; i++) {
    key += chars[Math.floor(Math.random() * chars.length)]
  }
  return key
}

type Span = {_type: string; _key?: string; text: string; marks?: string[]}
type Block = {_type: string; _key?: string; style?: string; markDefs?: unknown[]; children: Span[]}

async function run() {
  const instructors = await client.fetch<{_id: string; bio: Block[]}[]>(
    `*[_type == "instructor" && defined(bio)]{_id, bio}`,
  )

  for (const instructor of instructors) {
    const fixedBio = instructor.bio.map((block) => ({
      ...block,
      _key: block._key ?? randomKey(12),
      children: block.children.map((span) => ({
        ...span,
        _key: span._key ?? randomKey(12),
      })),
    }))

    await client.patch(instructor._id).set({bio: fixedBio}).commit()
    console.log(`Fixed bio keys: ${instructor._id}`)
  }

  console.log(`Done. Patched ${instructors.length} instructor(s).`)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

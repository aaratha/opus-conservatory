import {readFileSync} from 'node:fs'
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-08-15'})

const photos: {id: string; name: string; path: string}[] = [
  {id: 'LdiWgVkb5L1maos1m1NlQk', name: 'Marisela Smith', path: '/tmp/instructor-photos/marisela.jpg'},
  {id: 'ehsewyEIDHN7ru5pL4Fvrf', name: 'Kiara Rubin', path: '/tmp/instructor-photos/kiara.jpg'},
  {id: 'LdiWgVkb5L1maos1m1NpUk', name: 'Olga Kovalchuk Schwarz', path: '/tmp/instructor-photos/olga.jpg'},
  {id: 'LdiWgVkb5L1maos1m1NmLe', name: 'Wenru (Anna) Yang', path: '/tmp/instructor-photos/wenru.jpg'},
  {id: '7Amm9YM3n9rOI7A6gWF7XM', name: 'Mila Denisenko', path: '/tmp/instructor-photos/mila.jpg'},
  {id: '7Amm9YM3n9rOI7A6gWF8WE', name: 'Emily Perry', path: '/tmp/instructor-photos/emily.jpg'},
  {id: '7Amm9YM3n9rOI7A6gWF7r6', name: 'Kimberly Walters', path: '/tmp/instructor-photos/kimberly_b.jpg'},
  {id: 'LdiWgVkb5L1maos1m1Nveo', name: 'Jesús Rodríguez Castillo', path: '/tmp/instructor-photos/jesus_b.jpg'},
  {
    id: 'LdiWgVkb5L1maos1m1Nokg',
    name: 'Annie French',
    path: '/home/aaratha/Downloads/annie_french.png',
  },
  {
    id: 'LdiWgVkb5L1maos1m1NnB8',
    name: 'Elizabeth Esper',
    path: '/home/aaratha/Downloads/elizabeth_esper.png',
  },
  {id: '7Amm9YM3n9rOI7A6gWF4H0', name: 'Ian Harmon', path: '/home/aaratha/Downloads/ian_harmon.png'},
  {id: '405a5d0d-868c-40b2-b0a9-754e0bf246ed', name: 'Aseem Ratha', path: '/home/aaratha/Downloads/aseem_ratha.png'},
]

async function run() {
  for (const photo of photos) {
    const buffer = readFileSync(photo.path)
    const filename = photo.path.split('/').pop()!
    const asset = await client.assets.upload('image', buffer, {filename})
    await client
      .patch(photo.id)
      .set({photo: {_type: 'image', asset: {_type: 'reference', _ref: asset._id}}})
      .commit()
    console.log(`Set photo: ${photo.name}`)
  }
  console.log('Done.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

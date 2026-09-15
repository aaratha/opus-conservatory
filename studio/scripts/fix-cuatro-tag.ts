import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-08-15'})

async function run() {
  await client
    .patch('LdiWgVkb5L1maos1m1Nveo')
    .set({instruments: ['Guitar', 'Clarinet', 'Music Theory', 'Ukulele', 'Recorder', 'Cuatro']})
    .commit()
  console.log('Patched Jesús Rodríguez Castillo instruments.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

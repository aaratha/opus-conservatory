import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-08-15'})

async function run() {
  await client
    .patch('ehsewyEIDHN7ru5pL4FsMK')
    .set({phone: '(571) 244-2852', hours: ['Mon – Sun 9 a.m. – 8 p.m.']})
    .commit()
  console.log('Patched Loudoun location.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

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

function bio(paragraphs: string[]) {
  return paragraphs.map((text) => ({
    _type: 'block',
    _key: randomKey(),
    style: 'normal',
    markDefs: [],
    children: [{_type: 'span', _key: randomKey(), text, marks: []}],
  }))
}

type LocationInput = {
  name: string
  slug: string
  address: string
  phone: string
  hours: string[]
}

type InstructorInput = {
  name: string
  title?: string
  instruments?: string[]
  bio?: string[]
  email?: string
  locationSlugs: string[]
  photoUrl?: string
}

const locations: LocationInput[] = [
  {
    name: 'Loudoun',
    slug: 'loudoun',
    address: '22570 Markey Ct., Dulles, VA 20166',
    phone: '(571) 244-2855',
    hours: ['Mon – Sat 9 a.m. – 7 p.m.'],
  },
  {
    name: 'Richmond',
    slug: 'richmond',
    address: '5431 Niles Road, Richmond, VA 23234',
    phone: '(571) 730-7906',
    hours: ['Mon – Sat 9 a.m. – 7 p.m.'],
  },
]

const instructors: InstructorInput[] = [
  {
    name: 'Marisela Smith',
    title: 'Founder, Director, Certified Smart Start™ and Piano Instructor',
    instruments: ['Piano'],
    email: 'director@opusconservatory.com',
    locationSlugs: ['loudoun'],
    bio: [
      'Our studio founder and director, Marisela Smith, began playing piano when she was six years old under the tutelage of Professor Sidonia Stern. Mrs. Stern was a renowned German instructor who focused heavily on theory and agility, nurturing Marisela’s raw talent for music from an early age. She then attended the National Music Conservatory in Caracas, Venezuela, where she was classically trained and learned performance, composition, theory, and music history.',
        'Mrs. Smith began teaching piano in 1982 after moving to the United States to study at the University of Pennsylvania. Her passion was to teach young students, which allowed her to develop the unique, fun, and highly effective teaching methods used with the youngest students at Opus Conservatory. You should watch one of her classes to see her gift for engaging the imaginations of young children. From her, they learn musical notes, notations, and concepts before they have even learned to read. In her own words, "It seems to me that music is a great gift, that it enriches lives, and that it should always be fun!"',
      'In 2008, Marisela Smith founded Brambleton Piano Studio with four students of piano. Devoted to excellence, she has grown the school into the award-winning, full-fledged conservatory known as Opus Conservatory and School of Music with two locations, more than 200 students and a dozen classically trained, full-time instructors and supporting staff.',
      'Mrs. Smith is a dynamic, lively teacher who instills a love for music in her students. She believes that learning to play an instrument has a positive impact on the personal, academic, and professional lives of all students. Her goal is to help each student be the best they can be.',
    ],
  },
  {
    name: 'Wenru (Anna) Yang',
    title: 'Piano Instructor',
    instruments: ['Piano'],
    locationSlugs: ['loudoun'],
    bio: [
      'Dr. Wenru Yang was born in Qingdao, China, and began studying piano by age 5. In 2015, she graduated from the music school at Ocean University of China, earning her Bachelor of Arts in Piano Performance. Drawn to George Mason University (GMU) in Fairfax, VA, she studied with Dr. Anna Balakerskaia in 2017. She earned her Master of Music degree from GMU in 2019 and her Doctor of Musical Arts degree from GMU in 2024. During her doctoral studies, Dr. Yang received the College of Visual and Performing Arts Scholarship Award and the GMU Foundation Scholarship. She also taught Keyboard Skills and Fundamental Music Theory as a graduate teaching assistant at George Mason University.',
      'Dr. Yang has given solo recitals and performed at numerous events in recent years. In the spring of 2024, she gave a lecture-recital at GMU, analyzing the integration of Chinese and Western musical styles in selected Chinese piano works. Additionally, GMU selected her to perform at the Mason Honor Recital and Arts by George during her graduate and doctoral studies. Recently, she was awarded first prize for 20th Century Music in the 2024 Charleston International Competition.',
      'As a piano teacher, Dr. Yang aims to help students master practical skills to express themselves at the piano while sparking their musical imagination to ensure they enjoy making music. She seeks to choose diverse repertoires with her students to help widen their musical horizons.',
    ],
  },
  {
    name: 'Catherine Thorpe',
    title: 'Voice, piano, flute, and ukulele Instructor',
    instruments: ['Voice', 'Piano', 'Flute', 'Ukulele'],
    locationSlugs: ['loudoun'],
    bio: [
      'A student of the late Beverly Johnson, Catherine began her musical studies at seven years old and continued with piano studies at a Conservatory. As a teen, she began performing as a vocalist with a jazz quintet and a big band, interpreting standards with her father, the trumpeter, and bandleader. (He was a Fredonia and Eastman school graduate.)',
      'She studied the flute and early music performance as an audit student during her high school years at SUNY New Paltz.',
      'At the Peabody Conservatory, she received a bachelor’s and master’s degree, with a full Liberace Scholarship. She later went on as a young artist in the Juilliard Opera Center.',
      'Her mentors include pianist Sam Sanders, musicologist Pierro Weiss, and voice teachers like Wayne Conner, Beverly Peck Johnson, Dodi Prothero, Elisabeth Mannion, and Doris Cross.',
      'She has appeared in performances conducted by Gerard Schwarz, Leon Fleischer, George Manahan, Ransom Wilson, Gary Wedow, Joseph Colaneri, and others.',
      'Catherine has enchanted audiences throughout the United States, Europe, and Asia-Pacific in numerous operatic roles, orchestral concerts, and solo recitals. A versatile musician with a vibrant and engaging presence on stage. Soprano Catherine Thorpe is equally comfortable performing numerous vocal styles, from Opera to Early Music to Big Band standards.',
      'For many years she was the featured Girl Singer with the famous Swing-n-Sway with the Sammy Kay Orchestra on stage and has appeared on specials broadcast by PBS stations across the country.',
      'Soprano Catherine Thorpe has been praised, by The Washington Post, for having "A voice of liquid silver."',
    ],
  },
  {
    name: 'Elizabeth Esper',
    title: 'Piano and violin Instructor',
    instruments: ['Piano', 'Violin'],
    locationSlugs: ['loudoun'],
    bio: [
      'Elizabeth Esper is a dedicated musician and educator with 30 years of experience inspiring students of all ages. Raised in Wisconsin, she studied music, piano, and violin privately with various musicians, including her grandparents. Her paternal grandfather, Ohio State University Music Professor Emett Wilson, was a clarinetist who played for John Philip Sousa and was one of the original faculty members in the School of Music. He debuted as a pianist at the age of 16 with the Milwaukee Symphony Orchestra and taught orchestration at OSU. In 1952, The New York Times praised his book, "How to Help Your Child With Music." His wife was also a fellow OSU instructor of music.',
      'Elizabeth was a member of the inaugural U.S. high school strolling strings ensemble, The Golden Strings, under the tutelage of Dr. Stanley Nosal. The Golden Strings is a distinguished national and international music ambassadors ensemble that has graced the presence of Nancy Reagan at the White House and performed in numerous engagements across Europe, Asia, Canada, Mexico, and the United States. The Golden Strings students are required to memorize extensive musical compositions during a summer camp to attain proficiency in the art of strolling. Elizabeth was also honored to be selected for the state honors chamber orchestra at Lawrence University and to perform with city orchestras in the United States and France. Additionally, she has performed Celtic music at the annual large Irish Festival in Milwaukee, bluegrass fiddle for select ensembles in the Midwest, and studied jazz violin in Chicago.',
      'As an educator, Elizabeth is known for her encouraging demeanor and her ability to customize lessons to align with each student’s unique aspirations, emphasizing music as an integral component of their lifelong wellness program. As a licensed medical massage therapist certified by the Virginia Board of Nursing, she employs her expertise in anatomy and physiology to instruct in the appropriate technique and posture for a healthy and extended lifespan of musical instrument playing. As a daughter of a pediatrician, she recognized the significance of wellness from a prenatal stage and the profound impact of music on infants. Consequently, this inspired her to become a Certified Educator of Infant Massage, where she educates parents on utilizing music to enhance their core memory bonding time with their children from infancy onward.',
      'As a graduate of the University of Wisconsin and a former employee of the U.S. Department of State, Elizabeth has traveled and/or worked in 30 different countries. Elizabeth has raised two adult sons with her husband of 25 years of marriage and has served as a substitute teacher for various music instructors within the school systems.',
    ],
  },
  {
    name: 'Ian Harmon',
    title: 'Guitar Instructor',
    instruments: ['Guitar'],
    locationSlugs: ['loudoun'],
    bio: [
      'Ian Harmon earned his Bachelor’s Degree in Music Education from George Mason University, where he studied guitar under Matthew Trkula. He has been playing guitar for over 12 years, with nine years dedicated to the study of classical guitar.',
      'Throughout his musical training, Ian has studied with Larry Snitzler and Matthew Trkula and has participated in master classes with internationally recognized guitarists and educators, including Jason Vieaux, Oscar Ghiglia, Matthew Palmer, and Elliot Frank.',
      'Ian has taught in both Loudoun County and Arlington Public Schools and has been teaching private students since he was in high school. His experience working with students in both classroom and individual settings has helped him develop an engaging and supportive approach to music education, adapting his teaching to each student’s individual needs, goals, and learning style.',
      'The guitar has always been an important part of Ian’s life, and he finds great joy in sharing his love of music with others. He strives to create a positive learning environment where students can build strong musical foundations, develop confidence in their abilities, and enjoy the process of becoming musicians. His goal is to inspire a lifelong appreciation for music while helping each student reach their full potential.',
    ],
  },
  {
    name: 'Aseem Ratha',
    title: 'Digital Music Production Instructor',
    instruments: ['Digital Music Production', 'Piano'],
    locationSlugs: ['loudoun'],
    bio: [
      'Having studied piano since early childhood, Aseem brings both lifelong musical experience and a strong technical background to his work as an educator and music producer.',
      'Aseem is a dedicated educator who believes that any student can thrive with the right environment, tools, and guidance. He approaches every lesson with the conviction that great teaching means building independence, not dependence.',
      'He holds a B.Sc. Honours in Physics from the University of Toronto, where he developed a strong foundation in the mathematics and acoustics that underpin modern sound synthesis. His work spans electronic music production, computational sound design, and the development of custom music creation tools, bridging the gap between technical rigor and creative expression.',
      'Alongside his scientific background, Aseem brings hands-on experience in software development and IT, informing his approach to music technology as an interconnected ecosystem of tools, code, and sound. His work includes projects exploring synthesis techniques, algorithmic composition, and interactive audio software.',
      'As an instructor, Aseem is passionate about demystifying the technology behind electronic music and empowering students to develop their own creative workflows. He believes that curiosity — whether directed toward a synthesizer, a line of code, or a new genre — is one of the most important tools a musician can develop.',
    ],
  },
  {
    name: 'Annie French',
    title: 'Voice Instructor',
    instruments: ['Voice'],
    locationSlugs: ['loudoun'],
    bio: [
      'Annie French is a soprano in her senior year at George Mason pursuing a Bachelor of Music in Vocal Performance. Studying under Patricia Miller, Annie is completing her fourth semester in the Dewberry School of Music after transferring from Bard Conservatory of Music in the spring of 2023. Annie speaks German and has a soft spot for German lieder, while also enjoying French art song and focusing her efforts on operatic singing.',
      'Annie has performed multiple operatic scenes, most recently performing in her first full role as Gertrude Stein in Ricky Ian Gordon\'s "27". Annie has competed in the National Association of Teachers in Singing (NATS) Vocal Competition three times at George Mason, placing 1st and 2nd in her categories in the state audition round and advancing to the regional and national quarterfinal rounds. In Spring 2025, she was the only singer of five winners of the George Mason University Concerto Competition.',
      'Along with her passion for music, Annie is a well-travelled military child, and spent two years living abroad in Bayern, Germany. She enjoys reading, listening to music, knitting, and watching movies. Living with her mom and three younger siblings, she loves spending time with her family and Bun-bun, the family bunny.',
    ],
  },
  {
    name: 'Olga Kovalchuk Schwarz',
    title: 'Piano Instructor',
    instruments: ['Piano'],
    locationSlugs: ['loudoun'],
    bio: [
      'Olga started her music education at the Ryazan School of Music for Talented Children at six years old. A child prodigy, she was also coached by professors from the renowned Moscow State Conservatory, and she received additional coaching in chamber music.',
      'Olga received her Bachelor of Arts in Music Education from the Syktyvkar College of Music in Russia.',
      'Mrs. Kovalchuk is a passionate teacher and performing artist. She uses original exercises that integrate technical and artistic training for pianists, as she emphasizes the expression of emotion through music.',
      'She was a teacher and an accompanist at the Music School for Children in Russia for ten years. Many of her students have participated in competitions, performed in festivals and solo recitals, and gone on to outstanding universities in the US.',
      'She believes music should be something people share, and a vital aspect of that is being comfortable performing for others.',
      'She accepts advanced students through teacher recommendations and by audition only.',
    ],
  },
  {
    name: 'Kiara Rubin',
    title: 'Piano and violin Instructor',
    instruments: ['Piano', 'Violin'],
    locationSlugs: ['loudoun'],
    bio: [
      'Kiara Rubin received her MA in Musicology from the University of York in the United Kingdom and her BA in Violin Performance from the Shenandoah Conservatory in Virginia.',
      'Over the last fifteen years, she has studied, performed, and toured in the US, UK, Spain, and Argentina, as a member of an ensemble and as a soloist.',
      'Kiara is constantly looking to improve her knowledge and performance skills. She also studied in London with Remus Azoitei from the Royal Academy of London, where she attended numerous music festivals.',
      'She has participated in masterclasses with Vadim Repin, David Salness, Aeolus Quartet, and the Mendelssohn Piano Trio and toured with the Shenandoah Conservatory Symphony Orchestra in multiple cities in Spain and Argentina.',
      'Recently she has studied under Professor Akemi Takayama, former violinist of the Audubon Quartet, Oleg Rylatko, concertmaster of the Kennedy Center Opera House Orchestra, and Peter Sirotin.',
      'She continues to enjoy the rich culture and history within the classical, jazz, rhythm, and blues genres and loves to identify and work with the styles that best fit her student’s personalities.',
    ],
  },
  {
    name: 'Sarah Sherman',
    title: 'Voice and piano Instructor',
    instruments: ['Voice', 'Piano'],
    locationSlugs: ['loudoun'],
    bio: [
      'Sarah teaches beginner to advanced students & the Royal Conservatory Music Development Program.',
      'Sarah is a soprano trained in classical technique and musical theater; she has taught voice and piano for several years.',
      'Sarah received her Bachelor of Arts Degree in Music from the University of Virginia and continues to pursue vocal performance study towards a graduate degree. She continues her study with teachers in DC, Boston, New York, and Chicago; She takes every chance at her continued education and performance. The study of music has led her to pursue the cross-section of our physicality, our minds, and our souls.',
      'She believes strongly in music as a language of the heart. She encourages her students to develop a creative, playful, and intellectual relationship with music to improve synthesis, connectivity, and authenticity in every aspect of life.',
      'Sarah also studies voice, philosophy, religion, spirituality, psychology, and biology. She loves to read and make magic with all the bounty of the Earth!',
    ],
  },
  {
    name: 'Mila Denisenko',
    title: 'Piano Instructor',
    instruments: ['Piano'],
    locationSlugs: ['loudoun'],
    bio: [
      'Mila Denisenko is a warm, gifted, and passionate teacher. She has successfully prepared hundreds of students for recitals, tests, and competitions over more than 40 years as a piano teacher.',
      'Mila began studying at a music school when she was seven and studied at both the Tashkent Pedagogical University in Uzbekistan and the Sumgait Music College in Azerbaijan. She worked for many years as an accompanist for the Uzbekistan State Institute of Arts and Culture.',
      'Mila brings over 40 years of teaching experience to OPUS. After teaching piano for 32 years at various music schools in Tashkent, Uzbekistan, she moved to the United States, where she taught for 16 years in Los Angeles, California, at the Vietnam Academy of Music and the Moscow Music Center.',
      'She then moved to Virginia and has been teaching at Opus since 2022. She loves to teach and has a gift for bringing out the best in her students.',
    ],
  },
  {
    name: 'Kimberly Walters',
    title: 'Guitar, piano, ukulele, voice, Adaptive Lessons, and Certified Smart Start™ Instructor',
    instruments: ['Guitar', 'Piano', 'Ukulele', 'Voice'],
    locationSlugs: ['loudoun'],
    bio: [
      'Kimberly is a dedicated and versatile music instructor for beginner students in guitar, piano, ukulele, and voice lessons. Her musical journey began at the age of ten with voice lessons, and throughout her middle and high school years, she actively participated in school choirs and musical theater programs. Kimberly learned to play the guitar, piano, and ukulele. She later earned a Bachelor of Science in Music Therapy from SUNY Fredonia.',
      'After graduating in 2015, Kimberly returned to Florida to be near her family and began working for Master Musicians, Inc. as a music therapist, educator, and performer. As a music therapist, she provided services to individuals with memory care, hospice, stroke patients, and individuals with various disabilities and disorders.',
      'During the pandemic, Kimberly worked as an Activities Coordinator at an assisted living facility, where she organized and facilitated recreational programs for residents and helped them stay connected with their families throughout quarantine. After two years, she decided to take a break from healthcare and relocated to Northern Virginia to focus on teaching.',
      'Her background in music therapy equips her with unique skills to address and adapt to the individual needs of her students, creating a supportive and personalized learning environment. Having worked with people from diverse backgrounds and age groups, Kimberly is committed to fostering a love for music in all her students. Her expertise in music and sound healing therapy further enhances her teaching approach, making lessons educational and therapeutic.',
      'She can setup Adaptive Lessons which involves tailoring lessons to each child’s needs to ensure the student reaches their musical goals. She is a Certified Smart Start™ teacher.',
    ],
  },
  {
    name: 'Emily Perry',
    title:
      'Director of Music Therapy Program; Music Therapist, Adaptive Lessons, Certified Smart Start™ Teacher',
    instruments: ['Voice', 'Ukulele', 'Guitar', 'Piano'],
    locationSlugs: ['loudoun'],
    bio: [
      'Emily Perry MMT, MT-BC, is an experienced music therapist, who brings her therapeutic approach to teaching beginner students in voice, ukulele, guitar, and piano. Emily developed a passion for music from her first Kindermusic class at the age of 3. Emily fell in love with singing at an early age, ultimately studying voice, and finding a passion for Opera. She would go on to study and compete under the tutelage of Yvonne Shapiro-Mazo, Tatianna Katz, and Cynthia O’Connell.',
      'In her academic studies, Emily earned a Bachelor of Music in Music Therapy from the Baldwin Wallace Conservatory and passed the exam for Board-Certified Music Therapist (MT-BC) in 2019. In 2022, Emily would earn her Master in Music Therapy from Alverno College.',
      'Emily’s intentions as a teacher are to develop the passion for music, turning said passion into both leisure and coping skills, and creating equity in access to musical understanding. She uses multiple methods of teaching such as colors, percussion instruments, technology, movement, and gamification to help students toward a comprehensive understanding of music. Emily loves to adapt her lessons to her students. She can set up Adaptive Lessons, which involve tailoring lessons to each child’s needs to ensure the student reaches their musical goals. She is a Certified Smart Start™ teacher.',
      'As a Music Therapist Emily utilizes a humanistic-holistic trauma-informed approach that is client-centered. She enjoys collaboration and loves to work with other clinicians to ensure the best holistic care possible. Emily has worked with many populations including mental/behavioral health, medical/hospital setting, complex care, all ages of developmental and intellectual disabilities, autism spectrum disorder, hospice, geriatrics, and traumatic brain injury. Through genuine therapeutic rapport and individualized musical experiences, Emily ensures each voice is heard, respected, and has the opportunity to excel, whether that voice is loud, whispered, electronic, Signed, or waiting to be found. Each voice matters, and here, each voice will be heard.',
    ],
  },
  {
    name: 'Jesús Rodríguez Castillo',
    title: 'Online Instructor',
    instruments: ['Guitar', 'Clarinet', 'Music Theory', 'Ukulele', 'Recorder', 'Venezuelan Cuatro'],
    locationSlugs: ['loudoun'],
    bio: [
      'Jesús Rodríguez Castillo is a passionate music teacher dedicated to nurturing the talents of his students. His journey began with the clarinet—his principal instrument—and has since expanded to include the guitar, Venezuelan cuatro, ukulele, and recorder.',
      'Beyond teaching, he has conducted research in Latin American music, exploring its rhythms, harmonies, and cultural nuances. This cross-cultural perspective enriches his lessons, allowing students to experience music as part of a vibrant tradition.',
      'As a music conductor, Jesús’s career has been deeply intertwined with the Venezuelan Orchestra System (El Sistema). Since 2003, he has been part of this renowned program, first as a clarinetist in the Barquisimeto Youth Orchestra and later, beginning in 2007, as a teacher and conductor. He also served as conductor of the Orquesta Mavare de Barquisimeto for five years, leading the ensemble in performances that celebrated more than 125 years of musical history and cultural heritage.',
      'Jesús brings more than two decades of experience in performance and teaching. His patient, creative, and culturally rich approach makes him an inspiring instructor for students of all ages.',
    ],
  },
  {
    name: 'Karinna Bordas',
    title: 'Richmond Studio Director, Piano Instructor & Specialist in Preschool Piano Instruction',
    instruments: ['Piano'],
    locationSlugs: ['richmond'],
    photoUrl: 'https://opusconservatory.com/wp-content/uploads/2023/09/Portrait-Karinna.jpg',
    bio: [
      'Karinna teaches early beginners, preschool, kindergarten, and the Introduction to Piano program.',
      'Karinna Bordas is a dedicated and passionate educator with a deep love for teaching children and adults. She shares her love for music with students of all ages. Known for her kindness and patience, she creates a nurturing learning environment where everyone thrives.',
      'She earned her Bachelor of Arts in Communications from Andrés Bello University and her Master of Arts in Early Childhood Education from the Metropolitan University in Caracas, Venezuela. Her expertise led her to serve as the academic director of several preschools in Caracas, further enriching her experience in early childhood education.',
      'Beyond the classroom, Karinna has a lifelong passion for music. She began playing the piano in Venezuela and continues to study and perform in the United States. Currently, she is a Spanish teacher at Saint Mary’s Catholic School (RVA), where she brings her enthusiasm for both languages to her students.',
    ],
  },
]

async function upsertLocation(input: LocationInput) {
  const existing = await client.fetch<{_id: string} | null>(
    `*[_type == "location" && slug.current == $slug][0]{_id}`,
    {slug: input.slug},
  )
  const doc = {
    _type: 'location',
    name: input.name,
    slug: {_type: 'slug', current: input.slug},
    address: input.address,
    phone: input.phone,
    hours: input.hours,
  }
  if (existing) {
    console.log(`Updating location: ${input.name}`)
    await client.patch(existing._id).set(doc).commit()
    return existing._id
  }
  console.log(`Creating location: ${input.name}`)
  const created = await client.create(doc)
  return created._id
}

async function uploadPhoto(url: string, filename: string) {
  console.log(`  Downloading photo: ${url}`)
  const res = await fetch(url, {
    headers: {'User-Agent': 'Mozilla/5.0 (compatible; SanityImport/1.0)'},
  })
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`)
  const buffer = Buffer.from(await res.arrayBuffer())
  const asset = await client.assets.upload('image', buffer, {filename})
  return asset._id
}

async function upsertInstructor(input: InstructorInput, locationIds: Record<string, string>) {
  const existing = await client.fetch<{_id: string} | null>(
    `*[_type == "instructor" && name == $name][0]{_id}`,
    {name: input.name},
  )

  const doc: Record<string, unknown> = {
    _type: 'instructor',
    name: input.name,
    title: input.title,
    instruments: input.instruments,
    bio: input.bio ? bio(input.bio) : undefined,
    email: input.email,
    locations: input.locationSlugs.map((slug) => ({
      _type: 'reference',
      _ref: locationIds[slug],
      _key: slug,
    })),
  }

  if (input.photoUrl) {
    const assetId = await uploadPhoto(
      input.photoUrl,
      `${input.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg`,
    )
    doc.photo = {_type: 'image', asset: {_type: 'reference', _ref: assetId}}
  }

  if (existing) {
    console.log(`Updating instructor: ${input.name}`)
    await client.patch(existing._id).set(doc).commit()
  } else {
    console.log(`Creating instructor: ${input.name}`)
    await client.create(doc)
  }
}

async function run() {
  const locationIds: Record<string, string> = {}
  for (const loc of locations) {
    locationIds[loc.slug] = await upsertLocation(loc)
  }

  for (const instructor of instructors) {
    await upsertInstructor(instructor, locationIds)
  }

  console.log('Done.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

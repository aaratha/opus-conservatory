// One-off content import: seeds Location and Instructor documents in Sanity.
//
// Usage:
//   SANITY_API_TOKEN=sk... node scripts/import-content.mjs
//
// The token needs write access to the "production" dataset (create an
// Editor-role token at https://www.sanity.io/manage/project/epz95kwu/api).
import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
	console.error('Missing SANITY_API_TOKEN env var (needs write access to the dataset).');
	process.exit(1);
}

const client = createClient({
	projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'epz95kwu',
	dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
	apiVersion: '2024-01-01',
	token,
	useCdn: false,
});

const block = (text) => [
	{
		_type: 'block',
		style: 'normal',
		children: [{ _type: 'span', text }],
	},
];

const locations = [
	{
		_id: 'location-loudoun',
		_type: 'location',
		name: 'Loudoun',
		slug: { current: 'loudoun' },
		address: '22570 Markey Ct., Dulles, VA 20166',
		phone: '(571) 244-2852',
		hours: ['Mon–Sun 9am–8pm'],
		blurb: 'Our original studio and the home of the founder-led piano program.',
	},
	{
		_id: 'location-richmond',
		_type: 'location',
		name: 'Richmond',
		slug: { current: 'richmond' },
		address: '5431 Niles Road, Richmond, VA 23234',
		phone: '(571) 730-7906',
		hours: ['Mon–Sat 9am–7pm'],
		blurb: 'Our Richmond studio, led by the Richmond Studio Director.',
	},
];

const instructors = [
	{
		_id: 'instructor-marisela-smith',
		name: 'Marisela Smith',
		title: 'Founder & Director',
		locations: ['location-loudoun'],
		instruments: ['Piano', 'Smart Start'],
		bio: block(
			'Trained at the National Music Conservatory in Caracas, Venezuela and under Professor Sidonia Stern in Germany. Teaching piano since 1982; founded the school in 2008.'
		),
	},
	{
		_id: 'instructor-wenru-yang',
		name: 'Wenru (Anna) Yang',
		locations: ['location-loudoun'],
		instruments: ['Piano'],
		bio: block(
			'DMA, Master’s, and Bachelor’s degrees in Piano Performance from George Mason University (2024).'
		),
	},
	{
		_id: 'instructor-catherine-thorpe',
		name: 'Catherine Thorpe',
		locations: ['location-loudoun'],
		instruments: ['Voice', 'Piano', 'Flute', 'Ukulele'],
		bio: block(
			'Bachelor’s and Master’s degrees from Peabody Conservatory; trained at the Juilliard Opera Center.'
		),
	},
	{
		_id: 'instructor-elizabeth-esper',
		name: 'Elizabeth Esper',
		locations: ['location-loudoun'],
		instruments: ['Piano', 'Violin'],
		bio: block('30 years of teaching experience; member of the ensemble The Golden Strings.'),
	},
	{
		_id: 'instructor-ian-harmon',
		name: 'Ian Harmon',
		locations: ['location-loudoun'],
		instruments: ['Guitar'],
		bio: block('Bachelor’s degree in Music Education from George Mason University; 12+ years of guitar experience.'),
	},
	{
		_id: 'instructor-annie-french',
		name: 'Annie French',
		locations: ['location-loudoun'],
		instruments: ['Voice'],
		bio: block('Senior at George Mason University pursuing a Bachelor of Music in Vocal Performance; NATS competition finalist.'),
	},
	{
		_id: 'instructor-olga-kovalchuk-schwarz',
		name: 'Olga Kovalchuk Schwarz',
		locations: ['location-loudoun'],
		instruments: ['Piano'],
		bio: block('Trained at the Ryazan School of Music and Moscow State Conservatory; 10+ years teaching in Russia.'),
	},
	{
		_id: 'instructor-kiara-rubin',
		name: 'Kiara Rubin',
		locations: ['location-loudoun'],
		instruments: ['Piano', 'Violin'],
		bio: block('MA in Musicology from the University of York; BA in Violin Performance from Shenandoah Conservatory.'),
	},
	{
		_id: 'instructor-sarah-sherman',
		name: 'Sarah Sherman',
		locations: ['location-loudoun'],
		instruments: ['Voice', 'Piano'],
		bio: block('Bachelor of Arts in Music from the University of Virginia; trained in classical and musical theater voice.'),
	},
	{
		_id: 'instructor-mila-denisenko',
		name: 'Mila Denisenko',
		locations: ['location-loudoun'],
		instruments: ['Piano'],
		bio: block('40+ years of teaching experience across Uzbekistan, Azerbaijan, and Los Angeles; joined Opus in 2022.'),
	},
	{
		_id: 'instructor-kimberly-walters',
		name: 'Kimberly Walters',
		locations: ['location-loudoun'],
		instruments: ['Guitar', 'Piano', 'Ukulele', 'Voice', 'Smart Start', 'Adaptive Lessons'],
		bio: block('Bachelor of Science in Music Therapy from SUNY Fredonia (2015).'),
	},
	{
		_id: 'instructor-emily-perry',
		name: 'Emily Perry',
		locations: ['location-loudoun'],
		instruments: ['Voice', 'Ukulele', 'Guitar', 'Piano', 'Smart Start', 'Adaptive Lessons', 'Music Therapy'],
		bio: block(
			'MMT, MT-BC. Bachelor’s from Baldwin Wallace Conservatory; Master’s in Music Therapy from Alverno College (2022). Directs the Music Therapy program.'
		),
	},
	{
		_id: 'instructor-jesus-rodriguez-castillo',
		name: 'Jesús Rodríguez Castillo',
		locations: ['location-loudoun'],
		instruments: ['Guitar', 'Clarinet', 'Music Theory', 'Ukulele', 'Recorder', 'Venezuelan Cuatro'],
		bio: block('Part of the Venezuelan Orchestra System since 2003; 20+ years of teaching and performance experience.'),
	},
	{
		_id: 'instructor-karinna-bordas',
		name: 'Karinna Bordas',
		title: 'Richmond Studio Director',
		locations: ['location-richmond'],
		instruments: ['Piano'],
		bio: block(
			'BA in Communications from Andrés Bello University; MA in Early Childhood Education from Metropolitan University, Caracas.'
		),
	},
];

async function run() {
	console.log(`Importing ${locations.length} locations...`);
	for (const doc of locations) {
		await client.createOrReplace(doc);
		console.log(`  ✔ ${doc.name}`);
	}

	console.log(`Importing ${instructors.length} instructors...`);
	for (const { locations: locationIds, ...doc } of instructors) {
		await client.createOrReplace({
			...doc,
			_type: 'instructor',
			locations: locationIds.map((id) => ({ _type: 'reference', _ref: id, _key: id })),
		});
		console.log(`  ✔ ${doc.name}`);
	}

	console.log('Done.');
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
});

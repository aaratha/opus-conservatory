import { createClient, type SanityClient } from '@sanity/client';
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';

export const sanityClient: SanityClient = createClient({
  projectId: process.env.EXPO_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.EXPO_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-08-15',
  useCdn: false,
});

const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}

export type PortableTextBlock = {
  _type: string;
  children?: { text?: string }[];
};

export type Location = {
  _id: string;
  name: string;
  slug: { current: string };
};

export type InstructorLocation = {
  name: string;
  slug: string;
};

export type Instructor = {
  _id: string;
  name: string;
  title?: string;
  instruments?: string[];
  bio?: PortableTextBlock[];
  email?: string;
  photo?: SanityImageSource;
  locations?: InstructorLocation[];
};

export type Notice = {
  _id: string;
  text: string;
  date?: string;
};

export type UpcomingEvent = {
  _id: string;
  title: string;
  slug: { current: string };
  startDateTime: string;
  location?: string;
};

const INSTRUCTORS_QUERY = `*[_type == "instructor"] | order(name asc){
  _id, name, title, photo, instruments, bio, email,
  locations[]{
    "name": select(_type == "reference" => @->name, _type == "customLocation" => value),
    "slug": select(_type == "reference" => @->slug.current, _type == "customLocation" => value)
  }
}`;

const LOCATIONS_QUERY = `*[_type == "location"] | order(name asc){ _id, name, slug }`;

const NOTICES_QUERY = `*[_type == "notice"] | order(date asc){ _id, text, date }`;

const NEXT_EVENT_QUERY = `*[_type == "event" && defined(slug.current) && startDateTime > now()] | order(startDateTime asc)[0]{
  _id, title, slug, startDateTime,
  "location": select(
    location[0]._type == "reference" => location[0]->name,
    location[0]._type == "customLocation" => location[0].value
  )
}`;

export function fetchInstructors() {
  return sanityClient.fetch<Instructor[]>(INSTRUCTORS_QUERY);
}

export function fetchLocations() {
  return sanityClient.fetch<Location[]>(LOCATIONS_QUERY);
}

export function fetchNotices() {
  return sanityClient.fetch<Notice[]>(NOTICES_QUERY);
}

export function fetchNextEvent() {
  return sanityClient.fetch<UpcomingEvent | null>(NEXT_EVENT_QUERY);
}

export function plainTextFromBio(bio?: PortableTextBlock[]) {
  if (!bio) return '';
  return bio
    .map((block) => block.children?.map((child) => child.text ?? '').join('') ?? '')
    .join('\n\n');
}

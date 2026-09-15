import {defineField, defineType} from 'sanity'
import {PinIcon} from '@sanity/icons/Pin'

export const location = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      title: 'Hours',
      type: 'array',
      of: [defineField({name: 'line', type: 'string'})],
      description: 'One entry per line, e.g. "Mon–Sun 9am–8pm"',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'blurb',
      title: 'Short description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'address',
      media: 'image',
    },
  },
})

import {defineArrayMember, defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons/Calendar'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDateTime',
      title: 'Start Date & Time',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDateTime',
      title: 'End Date & Time',
      type: 'datetime',
      validation: (rule) =>
        rule.custom((endDateTime, context) => {
          const startDateTime = (context.document as {startDateTime?: string})?.startDateTime
          if (startDateTime && endDateTime && new Date(endDateTime) < new Date(startDateTime)) {
            return 'End must be after start'
          }
          return true
        }),
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'instructors',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'instructor'}]})],
    }),
    defineField({
      name: 'gallery',
      type: 'reference',
      to: [{type: 'gallery'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'startDateTime',
      media: 'coverImage',
    },
  },
})

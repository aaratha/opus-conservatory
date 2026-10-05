import {defineField, defineType} from 'sanity'
import {BellIcon} from '@sanity/icons/Bell'

export const notice = defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  icon: BellIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      description: 'A short announcement, e.g. "Studio closed for Labor Day".',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Shown as a short badge next to the notice, e.g. a deadline or closure date.',
    }),
  ],
  preview: {
    select: {title: 'text', subtitle: 'date'},
  },
})

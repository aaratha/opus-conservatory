import {defineArrayMember, defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons/User'

export const instructor = defineType({
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Role / title',
      type: 'string',
      description: 'e.g. "Founder & Director", "Richmond Studio Director"',
    }),
    defineField({
      name: 'locations',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'location'}]})],
    }),
    defineField({
      name: 'photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'instruments',
      title: 'Instruments / Subjects',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'instruments.0',
      media: 'photo',
    },
  },
})

export const schedule = {
  name: 'schedule',
  title: 'Schedule',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A label that appears on the schedule page',
      initialValue: 'Quarterly Schedule',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional text to explain or annotate the schedule image.',
    },
    {
      name: 'scheduleImage',
      title: 'Schedule Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Alt text for accessibility and SEO.',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'scheduleImage',
    },
  },
}

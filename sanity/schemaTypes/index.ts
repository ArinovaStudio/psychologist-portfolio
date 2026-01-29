import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog'
import { testimonial } from './testimonial'
import { book } from './book'
import { work } from './work'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, testimonial, book,work],
}

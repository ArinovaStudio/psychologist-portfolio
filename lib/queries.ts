export const WorksQuery = `
  *[_type == "work"] | order(createdAt asc) {
    _id,
    title,
    image,
    createdAt
  }
`
export const blogsQuery = `
  *[_type == "blog"] | order(publishedAt asc) {
    _id,
    title,
    slug,
    author,
    coverImage,
    tagline,
    publishedAt
  }
`

export const testimonialsQuery = `
  *[_type == "testimonial"] {
    _id,
    name,
    role,
    message,
    rating,
    avatar
  }
`

export const booksQuery = `
  *[_type == "book"] {
    _id,
    title,
    slug,
    author,
    price,
    coverImage,
    buyLink
  }
`

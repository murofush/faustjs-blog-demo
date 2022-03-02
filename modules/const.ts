export const productionKey = 'production'
export const DEV = ![
  process.env.NEXT_PUBLIC_NODE_ENV,
  process.env.VERCEL_ENV,
  process.env.NEXT_PUBLIC_VERCEL_ENV
].includes(productionKey)

export const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

export const TMP_COVER_IMAGE = `${URL}/img/coverImage.png`

export const fetchDefaultPostNum = 5

export const SITE_NAME = 'SampleBlog'

export const TOC_MARGIN_TOP = 80

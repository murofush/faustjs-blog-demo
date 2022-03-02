export interface Category {
  id: number
  seoTitle: string
  title: string
  slug: string
  color?: Nullable<string>
}

export interface Tag {
  id: number
  seoTitle: string
  title: string
  slug: string
}

export interface Post {
  id: number
  seoTitle: string
  title: string
  content: string
  categories: Category[]
  tags: Tag[]
  relatedPosts: Post[]
  slug: string
  thumbnailSrc: string
  createdDate: Nullable<string>
  updatedDate: Nullable<string>
}

export interface Page {
  id: number
  seoTitle: string
  title: string
  content: string
  slug: string
  thumbnailSrc: string
  createdDate: Nullable<string>
  updatedDate: Nullable<string>
}

export interface CreatedSiteOgp {
  url: string
  res?: ogpResponse
}

interface ogpResponse {
  imgUrl?: string
  title: string
  description?: string
}

export interface Heading {
  postTitle: string
  nodes: NodeInfo[]
  minDepth: number
}

export interface NodeInfo {
  id: string
  depth: number
  node: HTMLElement
}
export interface GeneralSettings {
  title: string
}

export interface ConvertOption {
  excludeChild?: boolean
}

export interface ConvertObjectOption extends ConvertOption {
  subId?: number
}

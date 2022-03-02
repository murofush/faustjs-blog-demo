import { Box } from '@chakra-ui/react'
import range from 'lodash/range'
import { Category, Page, Post, Tag } from 'utility/model'

interface option {
  largeValue?: boolean
  content?: string
}

export function _generateMockCategory(opt?: option): Category {
  return _generateMockCategories(1, opt)[0]
}
export function _generateMockCategories(length = 3, opt?: option): Category[] {
  return Array.from({ length }).map((_, index) => {
    const seoTitle = `CategorySEO${index}`
    const title = `Category${index}`
    const slug = `category${index}`
    return {
      id: index,
      seoTitle: opt?.largeValue ? seoTitle.repeat(20) : seoTitle,
      title: opt?.largeValue ? title.repeat(20) : title,
      slug: opt?.largeValue ? slug.repeat(20) : slug,
      color: 'primary'
    } as Tag
  })
}

export function _generateMockTag(opt?: option): Tag {
  return _generateMockTags(1, opt)[0]
}

export function _generateMockTags(length = 3, opt?: option): Tag[] {
  return Array.from({ length }).map((_, index) => {
    const seoTitle = `TagSEO${index}`
    const title = `Tag${index}`
    const slug = `tag${index}`
    return {
      id: index,
      seoTitle: opt?.largeValue ? seoTitle.repeat(20) : seoTitle,
      title: opt?.largeValue ? title.repeat(20) : title,
      slug: opt?.largeValue ? slug.repeat(20) : slug,
      color: index % 2 === 0 ? undefined : 'red.300'
    } as Tag
  })
}

export function _generateMockPost(opt?: option): Post {
  return _generateMockPosts(1, opt)[0]
}

export function _generateMockPosts(length = 3, opt?: option): Post[] {
  return Array.from({ length }).map((_, index) => {
    const seoTitle = `PostSEO${index}`
    const title = `PostTitle${index}`
    const slug = `post_slug_${index}`
    const content = `PostContent${index}`
    return {
      id: index,
      seoTitle: opt?.largeValue ? seoTitle.repeat(20) : seoTitle,
      title: opt?.largeValue ? title.repeat(20) : title,
      slug: opt?.largeValue ? slug.repeat(20) : slug,
      content: opt?.content
        ? opt?.content
        : opt?.largeValue
        ? content.repeat(100)
        : content,
      categories: _generateMockCategories(1, opt),
      tags: _generateMockTags(opt?.largeValue ? 20 : 2, opt),
      relatedPosts: [],
      thumbnailSrc: 'https://placehold.jp/800x600.png',
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString()
    }
  })
}

export function _generateMockPage(opt?: option): Page {
  const seoTitle = `PageSEO0`
  const title = `PageTitle0`
  const slug = `page_slug_0`
  const content = `PageContent0`
  return {
    id: 0,
    seoTitle: opt?.largeValue ? seoTitle.repeat(20) : seoTitle,
    title: opt?.largeValue ? title.repeat(20) : title,
    slug: opt?.largeValue ? slug.repeat(20) : slug,
    content: opt?.content
      ? opt?.content
      : opt?.largeValue
      ? content.repeat(100)
      : content,
    thumbnailSrc: 'https://placehold.jp/800x600.png',
    createdDate: new Date().toISOString(),
    updatedDate: new Date().toISOString()
  }
}

export function _generateMockCreatedSiteOgps(opt?: option): CreatedSiteOgp[] {
  return [
    {
      url: '/dummy_link1',
      res: {
        imgUrl: 'https://placehold.jp/400x150.png',
        title: 'OGP1',
        description: 'OGPテスト1'
      }
    },
    {
      url: '/dummy_link2',
      res: {
        imgUrl: 'https://placehold.jp/300x250.png',
        title: 'OGP2',
        description: 'OGPテスト2'
      }
    },
    {
      url: '/dummy_link3',
      res: {
        imgUrl: 'https://placehold.jp/250x300.png',
        title: 'OGP3',
        description: 'OGPテスト3'
      }
    },
    {
      url: '/dummy_link4',
      res: {
        title: 'OGP4',
        description: undefined,
        imgUrl: undefined
      }
    }
  ]
}

export function _generateMockContentElement(opt?: option) {
  const postListId = '記事一覧'
  const testDivElement = document.createElement('div')
  range(opt?.largeValue ? 20 : 5).map((contentIndex) => {
    range(4).map((headingIndex) => {
      const testH1Element = document.createElement(`h${headingIndex + 1}`)
      testH1Element.innerText = `heading${headingIndex + 1}_${contentIndex + 1}`
      testDivElement.appendChild(testH1Element)
    })
  })
  return {
    jsx: (
      <>
        <Box h="300px"></Box>
        <Box ref={(ref) => ref?.appendChild(testDivElement)} />
        <Box h="300px"></Box>
        <Box id={postListId}>Mock PostListElement</Box>
        <Box h="600px"></Box>
      </>
    ),
    postId: postListId,
    element: testDivElement
  }
}

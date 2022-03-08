/**
 * Doc: https://gqty.dev/docs/react/troubleshooting#data-selections--conditionals
 * Issue: https://github.com/wpengine/faustjs/issues/624
 */

import defaults from 'lodash/defaults'
import {
  Post as GqtyPost,
  Page as GqtyPage,
  Category as GqtyCategory,
  Tag as GqtyTag,
  GeneralSettings as GqtyGeneralSettings
} from 'client'
import {
  Post,
  Category,
  Tag,
  Page,
  GeneralSettings,
  ConvertObjectOption,
  ConvertOption
} from 'modules/model'
import { filterAbsolutelyArray } from 'modules/function'
import { fetchDefaultPostNum } from 'modules/const'

export function convertPostsFromGqty(
  posts: Nullable<Nullable<GqtyPost>[]>,
  opt?: ConvertOption
): Post[] {
  return filterAbsolutelyArray(
    posts?.map((post, index) => {
      return convertPostFromGqty(post, defaults(opt, { subId: index }))
    }) ?? []
  )
}

export function convertPostFromGqty(
  post: Nullable<GqtyPost>,
  opt?: ConvertObjectOption
): Post {
  const subId = opt?.subId ?? 0
  const postSeo = post?.seo
  const postFeaturesImage = post?.featuredImage?.node
  return {
    id: post?.postId ?? subId,
    title: post?.title() ?? '-',
    seoTitle: postSeo?.title ?? '-',
    content: post?.content() ?? '',
    categories: convertCategoriesFromGqty(post?.categories()?.nodes ?? []),
    tags: convertTagsFromGqty(post?.tags()?.nodes ?? []),
    slug: post?.slug ?? '',
    thumbnailSrc: postFeaturesImage?.sourceUrl() ?? '/img/coverImage.png',
    createdDate: post?.date,
    updatedDate: post?.modified
  }
}

export function convertPageFromGqty(
  page: Nullable<GqtyPage>,
  opt?: ConvertObjectOption
): Page {
  const subId = opt?.subId ?? 0
  const pageSeo = page?.seo
  const pageFeaturedImage = page?.featuredImage?.node
  return {
    id: page?.pageId ?? subId,
    title: page?.title() ?? '-',
    seoTitle: pageSeo?.title ?? '-',
    content: page?.content() ?? '',
    slug: page?.slug ?? '',
    thumbnailSrc: pageFeaturedImage?.sourceUrl() ?? '/img/coverImage.png',
    createdDate: page?.date,
    updatedDate: page?.modified
  }
}

export function convertCategoriesFromGqty(
  categories: Nullable<Nullable<GqtyCategory>[]>
): Category[] {
  return filterAbsolutelyArray(
    categories?.map((category, index) => {
      return convertCategoryFromGqty(category, { subId: index })
    }) ?? []
  )
}

export function convertCategoryFromGqty(
  category: Nullable<GqtyCategory>,
  opt?: ConvertObjectOption
): Category {
  const subId = opt?.subId ?? 0
  const categorySeo = category?.seo
  return {
    id: category?.categoryId ?? subId,
    title: category?.name ?? '-',
    seoTitle: categorySeo?.title ?? '-',
    slug: category?.slug ?? '',
    color: category?.categoryColor?.color ?? undefined
  }
}

export function convertTagsFromGqty(
  tags: Nullable<Nullable<GqtyTag>[]>
): Tag[] {
  return filterAbsolutelyArray(
    tags?.map((tag, index) => {
      return convertTagFromGqty(tag, { subId: index })
    }) ?? []
  )
}

export function convertTagFromGqty(
  tag: Nullable<GqtyTag>,
  opt?: ConvertObjectOption
): Tag {
  const subId = opt?.subId ?? 0
  const tagSeo = tag?.seo
  return {
    id: tag?.tagId ?? subId,
    title: tag?.name ?? '-',
    seoTitle: tagSeo?.title ?? '-',
    slug: tag?.slug ?? ''
  }
}

export function convertGeneralSettings(
  generalSettings: Nullable<GqtyGeneralSettings>
): GeneralSettings {
  return {
    title: generalSettings?.title ?? ''
  }
}

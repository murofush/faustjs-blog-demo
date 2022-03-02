import { GetStaticPropsContext } from 'next'
import React from 'react'
import { useRouter } from 'next/router'
import { hasCategorySlug } from '@faustjs/next/utils'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { client } from 'client'
import { DynamicMeta } from 'modules/dynamicMeta'
import { Header } from 'components/templates/Header'
import { useCategories } from 'modules/queryHook'
import {
  convertCategoriesFromGqty,
  convertPostsFromGqty
} from 'modules/converter'
import { CategorySearchResult } from 'components/templates/CategorySearchResult'

export default function Page() {
  // 現状、なぜか useCategoryからデータを取得するとCache周りで不具合が発生するので使わない。
  const { query } = useRouter()
  const categorySlug = hasCategorySlug(query) ? query.categorySlug : undefined

  const gqtyPosts = client.usePosts()?.nodes
  const gqtyCategories = useCategories(client)

  const posts = convertPostsFromGqty(gqtyPosts)
  const categories = convertCategoriesFromGqty(gqtyCategories)

  const category = categories?.find((category) => {
    return category.slug === categorySlug
  })

  return (
    <>
      <DynamicMeta title={category?.seoTitle} />
      <Header categories={categories}></Header>
      <CategorySearchResult
        as="main"
        px="contentSpacingX"
        my="contentSpacingY"
        category={category}
        categories={categories}
        posts={posts}
      ></CategorySearchResult>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  if (await is404(context, { client })) {
    return {
      notFound: true
    }
  }
  return getNextStaticProps(context, {
    Page,
    client
  })
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

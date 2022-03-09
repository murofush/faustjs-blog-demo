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
import { Category } from 'modules/model'

export default function Page() {
  // For some reason, when useCategory and useCategories coexist and data is acquired, problems occur around Cache, so we do not use them.
  // There is probably the same possibility that usePost and usePosts cause the same problem, but this one can be safely avoided, so we will ignore it for now.
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

import { GetStaticPropsContext } from 'next'
import React from 'react'
import { getNextStaticProps } from '@faustjs/next'
import { client } from 'client'
import { DynamicMeta } from 'modules/dynamicMeta'
import { useCategories, useTags } from 'modules/queryHook'
import { Header } from 'components/templates/Header'
import {
  convertGeneralSettings,
  convertTagsFromGqty,
  convertCategoriesFromGqty,
  convertPostsFromGqty
} from 'modules/converter'
import { Home } from 'components/templates/Home'
export default function Page() {
  const gqtyCategories = useCategories(client)
  const gqtyTags = useTags(client)
  const gqtyPosts = client.usePosts()?.nodes
  const gqtyGeenralSettings = client.useQuery().generalSettings

  const categories = convertCategoriesFromGqty(gqtyCategories)
  const tags = convertTagsFromGqty(gqtyTags)
  const posts = convertPostsFromGqty(gqtyPosts)
  const generalSettings = convertGeneralSettings(gqtyGeenralSettings)

  return (
    <>
      <DynamicMeta title={generalSettings?.title ?? undefined} />
      <Header categories={categories}></Header>
      <Home categories={categories} tags={tags} posts={posts}></Home>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client
  })
}

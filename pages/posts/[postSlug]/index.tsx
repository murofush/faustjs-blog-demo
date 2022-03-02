import { GetStaticPropsContext } from 'next'
import React from 'react'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { Post } from 'components/templates/Post'
import { client } from 'client'
import { DynamicMeta } from 'modules/dynamicMeta'
import { useCategories } from 'modules/queryHook'
import { Header } from 'components/templates/Header'
import {
  convertCategoriesFromGqty,
  convertPostFromGqty,
  convertPostsFromGqty
} from 'modules/converter'
import { Post as PostType, Category } from 'modules/model'

export interface PostProps {
  post: PostType
  categories: Category[]
  recentPosts: PostType[]
}

export function PageComponent(props: PostProps) {
  return (
    <>
      <DynamicMeta
        title={props.post.seoTitle}
        ogType="article"
        image={props.post.thumbnailSrc}
      />
      <Header categories={props.categories}></Header>
      <Post
        post={props.post}
        categories={props.categories}
        recentPosts={props.recentPosts}
      />
    </>
  )
}

// The same problem occurred for both recentPosts and relatedPosts, but we have commented out recentPosts to narrow down the cause.
export default function Page() {
  const gqtyPost = client.usePost()
  const gqtyRecentPosts = client.usePosts()?.nodes
  const gqtyCategories = useCategories(client)
  const post = convertPostFromGqty(gqtyPost)
  const recentPosts = convertPostsFromGqty(gqtyRecentPosts)
  const categories = convertCategoriesFromGqty(gqtyCategories)
  return (
    <PageComponent
      post={post}
      categories={categories}
      recentPosts={recentPosts}
    />
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

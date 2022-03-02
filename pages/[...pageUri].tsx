import { GetStaticPropsContext } from 'next'
import React from 'react'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { DynamicMeta } from 'modules/dynamicMeta'
import { client } from 'client'
import { Category, Page as PageType } from 'modules/model'
import { Header } from 'components/templates/Header'
import { useCategories } from 'modules/queryHook'
import {
  convertCategoriesFromGqty,
  convertPageFromGqty
} from 'modules/converter'
import { Page as PageOrganismComponent } from 'components/templates/Page'

export interface PageProps {
  page: PageType
  categories?: Category[]
}

/**
 * 固定ページ View
 */
export function PageComponent(props: PageProps) {
  return (
    <>
      <DynamicMeta
        title={props.page.seoTitle}
        ogType="article"
        image={props.page.thumbnailSrc}
      />
      <Header categories={props.categories}></Header>
      <PageOrganismComponent
        page={props.page}
        categories={props.categories}
      ></PageOrganismComponent>
    </>
  )
}

export default function Page() {
  const gqtyPage = client.usePage()
  const gqtyCategories = useCategories(client)
  const page = convertPageFromGqty(gqtyPage)
  const categories = convertCategoriesFromGqty(gqtyCategories)

  return <PageComponent page={page} categories={categories} />
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

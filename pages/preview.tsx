import { PageComponent } from './[...pageUri]'
import { PageComponent as PostComponent } from './posts/[postSlug]'
import { client } from 'client'
import { DEV } from 'modules/const'
import { convertPageFromGqty, convertPostFromGqty } from 'modules/converter'

export default function Preview() {
  const { usePreview } = client.auth
  const result = usePreview()

  if (client.useIsLoading() || !result) {
    return <p>loading...</p>
  }

  if (result.type === 'page') {
    if (!result.page) {
      return <>Not Found</>
    }

    return <PageComponent page={convertPageFromGqty(result.page)} />
  }

  if (!result.post) {
    return <>Not Found</>
  }

  return (
    <PostComponent
      post={convertPostFromGqty(result.post)}
      categories={[]}
      recentPosts={[]}
    />
  )
}

export function getStaticProps() {
  if (!DEV) {
    return {
      notFound: true
    }
  }
  return {
    props: {}
  }
}

import Head from 'next/head'
import React, { useMemo } from 'react'
import { SITE_NAME, URL } from 'modules/const'
import { getAbsoluteUrl } from 'modules/function'

interface Props {
  title?: string
  description?: string
  ogType?: 'website' | 'article'
  image?: string
  asPath?: string
}
export const DynamicMeta = React.memo(function DynamicMeta({
  title = SITE_NAME,
  description = `${title}です。`,
  ogType = 'website',
  image = ogType === 'website'
    ? `${URL}/icon/siteIcon.png`
    : `${URL}/img/coverImage.png`,
  asPath
}: Props) {
  const url = useMemo(() => {
    return getAbsoluteUrl(asPath ?? '')
  }, [asPath])
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:card"
        content={ogType === 'website' ? 'summary' : 'summary_large_image'}
      />
      <meta property="og:type" content={ogType} />
      <>
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
      </>
      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </>
      )}
    </Head>
  )
})

import React from 'react'
import { VStack, Box, Divider, Grid } from '@chakra-ui/react'
import { PostBottom } from 'components/templates/Post/PostBottom'
import { PostHeading } from 'components/templates/Post/PostHeading'
import { Post as PostType, Category } from 'modules/model'
import { CoverImage } from 'components/atoms/CoverImage'
import { PostBody } from 'components/molecules/PostBody'
import { PostLeft } from 'components/templates/Post/PostLeft'

interface Props {
  post: PostType
  categories: Category[]
  recentPosts: PostType[]
}

export const Post = React.memo(function Post({
  post,
  categories,
  recentPosts
}: Props) {
  const postContentId = 'post_main_content'

  const postTitle = post.title
  const postUpdatedDate = post.updatedDate
  const postCategories = post.categories
  const postTags = post.tags
  const postDate = post.createdDate
  const coverImgSrc = post.thumbnailSrc
  const relatedPosts = post.relatedPosts ?? []

  const postContentWidth = '1000px'
  const leftContentExpandWidth = '300px'

  const contentGap = {
    sm: 6,
    xl: 16,
    '2xl': 20
  }

  return (
    <>
      <Grid
        templateColumns={{ base: '100%', xl: `${leftContentExpandWidth} 1fr` }}
        gap={contentGap}
      >
        <PostLeft
          display={{ base: 'none', xl: 'block' }}
          overflow="auto"
          position="sticky"
          top="headerHeight"
          h="100vh"
          borderRightWidth="1px"
          relatedPosts={relatedPosts}
          pt="1rem"
          categories={categories}
          recentPosts={recentPosts}
        />
        <VStack
          spacing="0"
          pr={{ base: 0, lg: 'contentSpacingX' }}
          pl={{ base: 0, lg: 'contentSpacingX', xl: 0 }}
          py="contentSpacingY"
          mx="auto"
          w="full"
        >
          <PostHeading
            pb="16"
            postTitle={postTitle}
            postCategories={postCategories}
            postDate={postDate}
            postUpdatedDate={postUpdatedDate}
            postTags={postTags}
            w="full"
            maxW={postContentWidth}
          ></PostHeading>
          <Box
            py="6"
            px="6"
            mb="contentSpacingY"
            w="full"
            maxW={postContentWidth}
          >
            <VStack spacing="12" align="stretch">
              <CoverImage name={postTitle} src={coverImgSrc} h="320px" />
              <PostBody id={postContentId} content={post?.content}></PostBody>
            </VStack>
          </Box>
          <Divider></Divider>
          <PostBottom
            pt="12"
            px="2"
            w="full"
            relatedPosts={relatedPosts}
            recentPosts={recentPosts}
          ></PostBottom>
        </VStack>
      </Grid>
    </>
  )
})

import { Stack, VStack, Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Category, Post, Tag } from 'modules/model'
import { PostCardList } from 'components/organisms/PostCardList'
import { TagList } from 'components/organisms/TagList'
import { CategoryList } from 'components/organisms/CategoryList'

export interface Props {
  categories: Nullable<Category[]>
  tags: Nullable<Tag[]>
  posts: Nullable<Post[]>
}

export const Home = React.memo(function Home({
  categories,
  tags,
  posts
}: Props) {
  const innerContentSpacing = '3'
  const subHeadingFontSize = '2xl'

  return (
    <>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        as="main"
        py="contentSpacingY"
        spacing="20"
        mx="contentSpacingX"
        justify="space-between"
        align="start"
      >
        <VStack align="stretch" w="full" spacing="contentSpacingY">
          <VStack align="stretch" spacing={innerContentSpacing}>
            <Heading as="h3" fontSize={subHeadingFontSize}>
              Posts
            </Heading>
            <Box minH="100px">
              <PostCardList posts={posts} />
            </Box>
          </VStack>
          <VStack align="stretch" spacing={innerContentSpacing}>
            <Box minH="50px">
              <CategoryList categories={categories} />
            </Box>
          </VStack>
          <VStack align="stretch" spacing={innerContentSpacing}>
            <Box minH="50px">
              {tags && tags.length > 0 && <TagList tags={tags} />}
            </Box>
          </VStack>
        </VStack>
      </Stack>
    </>
  )
})

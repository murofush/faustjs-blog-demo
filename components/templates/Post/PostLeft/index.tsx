import type { BoxProps } from '@chakra-ui/react'
import { Box, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Category, Post } from 'modules/model'
import { PostList } from 'components/organisms/PostList'
import { NavList } from 'components/organisms/NavList'

interface Props extends BoxProps {
  recentPosts: Nullable<Post[]>
  categories: Nullable<Category[]>
}

export const PostLeft = React.memo(function PostLeft({
  recentPosts,
  categories,
  ...boxProps
}: Props) {
  return (
    <Box {...boxProps}>
      <VStack spacing="6" px="1" align="stretch">
        <NavList categories={categories} spacing="2"></NavList>
        {recentPosts && recentPosts.length > 0 && (
          <Box>
            <Text
              as="h2"
              p="2"
              fontWeight="bold"
              fontSize="lg"
              textAlign="center"
            >
              Recent Posts
            </Text>
            <PostList posts={recentPosts}></PostList>
          </Box>
        )}
      </VStack>
    </Box>
  )
})

import { VStack, Box, Text } from '@chakra-ui/react'
import type { StackProps } from '@chakra-ui/react'
import React from 'react'
import { Post } from 'modules/model'
import { PostCardList } from 'components/organisms/PostCardList'
import { PostList } from 'components/organisms/PostList'

interface Props extends StackProps {
  relatedPosts: Nullable<Post[]>
  recentPosts: Nullable<Post[]>
}
export const PostBottom = React.memo(function PostBottom({
  relatedPosts,
  recentPosts,
  ...stackProps
}: Props) {
  const postCardDisplay = { base: 'none', sm: 'block' }
  const postListDisplay = { base: 'block', sm: 'none' }
  return (
    <VStack spacing="6" align="stretch" {...stackProps}>
      {relatedPosts && relatedPosts.length > 0 && (
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb="4">
            Related Posts
          </Text>
          <>
            <PostList display={postListDisplay} posts={relatedPosts}></PostList>
            <PostCardList
              display={postCardDisplay}
              posts={relatedPosts}
            ></PostCardList>
          </>
        </Box>
      )}
      {recentPosts && recentPosts.length > 0 && (
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb="4">
            Recent Posts
          </Text>
          <PostList display={postListDisplay} posts={recentPosts}></PostList>
          <PostCardList
            display={postCardDisplay}
            posts={recentPosts}
          ></PostCardList>
        </Box>
      )}
    </VStack>
  )
})

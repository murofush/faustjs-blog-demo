import React from 'react'
import { VStack } from '@chakra-ui/react'
import type { StackProps } from '@chakra-ui/react'
import { PostListItem } from 'components/molecules/PostListItem'
import { Post } from 'modules/model'

interface Props extends StackProps {
  posts: Nullable<Post[]>
}
export const PostList = React.memo(function PostList({
  posts,
  ...stackProps
}: Props) {
  return (
    <VStack align="stretch" spacing="0" borderTopWidth="1px" {...stackProps}>
      {posts?.map((post) => {
        const postId = post.id
        return <PostListItem key={postId} post={post} borderBottomWidth="1px" />
      })}
    </VStack>
  )
})

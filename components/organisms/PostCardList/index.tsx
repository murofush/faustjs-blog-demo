import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import { PostCardListItem } from 'components/molecules/PostCardListItem'
import { Post } from 'modules/model'

interface Props extends BoxProps {
  posts: Nullable<Post[]>
  columns?: React.ComponentProps<typeof SimpleGrid>['columns']
}

export const PostCardList = React.memo(function PostCardList({
  posts,
  ...boxProps
}: Props) {
  return (
    <Box {...boxProps}>
      <SimpleGrid
        templateColumns="repeat(auto-fit, minmax(300px,350px))"
        gap={12}
      >
        {posts?.map((post) => (
          <PostCardListItem
            key={post.id}
            post={post}
            mb="8"
            borderBottomWidth="1px"
          />
        ))}
      </SimpleGrid>
    </Box>
  )
})

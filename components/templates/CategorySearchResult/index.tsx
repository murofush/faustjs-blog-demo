import React from 'react'
import { Icon, VStack, Heading } from '@chakra-ui/react'
import type { StackProps } from '@chakra-ui/react'
import { HiOutlineViewList } from 'react-icons/hi'
import { Category, Post } from 'modules/model'
import { PostCardList } from 'components/organisms/PostCardList'
import { CategoryList } from 'components/organisms/CategoryList'

interface Props extends StackProps {
  categories: Nullable<Category[]>
  category: Nullable<Category>
  posts: Nullable<Post[]>
}

export const CategorySearchResult = React.memo(function CategorySearchResult({
  category,
  categories,
  posts,
  ...stackProps
}: Props) {
  return (
    <VStack
      align="stretch"
      spacing="12"
      mx="contentSpacingX"
      my="contentSpacingY"
      {...stackProps}
    >
      <Heading as="h1">
        <Icon as={HiOutlineViewList} color="primary" mr="1"></Icon>
        {category?.title ?? '-'}
      </Heading>
      <CategoryList categories={categories} />

      <PostCardList posts={posts} />
    </VStack>
  )
})

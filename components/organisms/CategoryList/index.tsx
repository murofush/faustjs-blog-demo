import { Wrap, WrapItem, Box, Icon } from '@chakra-ui/react'
import type { WrapProps } from '@chakra-ui/react'
import React from 'react'
import { HiViewList } from 'react-icons/hi'
import { Category } from 'modules/model'
import { LinkTag } from 'components/atoms/LinkTag'

interface Props extends WrapProps {
  categories: Nullable<Category[]>
  clickDisabled?: boolean
  thin?: boolean
}
export const CategoryList = React.memo(function CategoryList({
  categories,
  clickDisabled,
  thin,
  ...wrapProps
}: Props) {
  return (
    <Wrap align="center" {...wrapProps}>
      {categories?.map((category) => {
        const categoryName = category.title
        const categorySlug = category.slug
        const categoryId = category.id
        return (
          categoryName &&
          categorySlug && (
            <WrapItem key={categoryId} minW="0" flex="0 1 auto">
              <Box minW="0" flex="0 1 auto">
                <LinkTag
                  leftIcon={
                    thin ? undefined : <Icon as={HiViewList} mr="1"></Icon>
                  }
                  href={`/categories/${categorySlug}`}
                  name={categoryName}
                  clickDisabled={clickDisabled}
                  size={thin ? 'sm' : 'md'}
                  p={thin ? '1' : '2'}
                  bg={category.color ?? 'primary'}
                  color="white"
                ></LinkTag>
              </Box>
            </WrapItem>
          )
        )
      })}
    </Wrap>
  )
})

import { Wrap, WrapItem, Box, Icon } from '@chakra-ui/react'
import type { WrapProps } from '@chakra-ui/react'
import React from 'react'
import { FaHashtag } from 'react-icons/fa'
import { Tag } from 'modules/model'
import { LinkTag } from 'components/atoms/LinkTag'

interface Props extends WrapProps {
  tags: Nullable<Tag[]>
  clickDisabled?: boolean
  color?: string
  shrink?: boolean
}
export const TagList = React.memo(function TagList({
  tags,
  clickDisabled,
  shrink,
  color = 'primary',
  ...wrapProps
}: Props) {
  return (
    <Wrap align="center" {...wrapProps}>
      {tags?.map((tag) => {
        const tagName = tag.title
        const tagSlug = tag.slug
        const tagId = tag.id
        return (
          tagName &&
          tagSlug && (
            <WrapItem key={tagId} minW="0" flex="0 1 auto">
              <Box minW="0" flex="0 1 auto">
                <LinkTag
                  isText
                  href={`/tags/${tagSlug}`}
                  variant="outline"
                  name={tagName}
                  leftIcon={<Icon as={FaHashtag}></Icon>}
                  clickDisabled={clickDisabled}
                  py={shrink ? '0' : '2'}
                  px={shrink ? '1' : '2'}
                  size={shrink ? 'sm' : 'md'}
                  color={color}
                ></LinkTag>
              </Box>
            </WrapItem>
          )
        )
      })}
    </Wrap>
  )
})

import React from 'react'
import {
  Heading,
  Box,
  VStack,
  Spacer,
  Text,
  AspectRatio,
  Tooltip,
  HStack
} from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import { CoverImage } from '../../atoms/CoverImage'
import { Link } from 'components/atoms/Link'
import { Date } from 'components/atoms/Date'
import { Post } from 'modules/model'
import { useHoverColor } from 'modules/function'
import { CategoryList } from 'components/organisms/CategoryList'

interface Props extends BoxProps {
  post: Post
  clickDisabled?: boolean
}

export const PostCardListItem = React.memo(function PostCardListItem({
  post,
  clickDisabled,
  ...boxProps
}: Props) {
  return !clickDisabled && post.slug ? (
    <Box {...boxProps}>
      <Link href={`/posts/${post?.slug}`}>
        <BasePostItem post={post} />
      </Link>
    </Box>
  ) : (
    <Box {...boxProps}>
      <BasePostItem post={post} />
    </Box>
  )
})

function BasePostItem({ post }: Props) {
  const lineHeight = '1.2em'
  const noOfLines = 3
  const imgSrc = post.thumbnailSrc
  const categories = post.categories
  const dateIsoString = post.createdDate
  const hoverColor = useHoverColor()
  const postTitle = post.title

  return (
    <Box
      position="relative"
      overflow="hidden"
      h="full"
      pb="2"
      _hover={{ bgColor: hoverColor }}
    >
      <VStack spacing="2" align="stretch">
        <AspectRatio ratio={16 / 9}>
          <CoverImage name={postTitle} src={imgSrc} />
        </AspectRatio>
        <Tooltip label={postTitle} placement="top">
          <Heading as="h3" fontWeight="bold" fontSize="md" px="1">
            <Text noOfLines={noOfLines} lineHeight={lineHeight}>
              {postTitle}
            </Text>
          </Heading>
        </Tooltip>
        <HStack>
          <Spacer></Spacer>
          <Box alignSelf="end">
            {dateIsoString && (
              <Date dateIsoString={dateIsoString} fontSize="sm" />
            )}
          </Box>
        </HStack>
      </VStack>
      <HStack
        spacing="1"
        position="absolute"
        w="full"
        top="0"
        left="0"
        px="2"
        pt="2"
        justify="start"
      >
        <Spacer></Spacer>
        <CategoryList categories={categories} flex=" 0 1 auto" minW="0" thin />
      </HStack>
    </Box>
  )
}

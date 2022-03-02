import React from 'react'
import {
  Heading,
  Box,
  Text,
  HStack,
  VStack,
  Tooltip,
  AspectRatio
} from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import { CoverImage } from '../../atoms/CoverImage'
import { Link } from 'components/atoms/Link'
import { Post } from 'modules/model'
import { useHoverColor } from 'modules/function'
import { CategoryList } from 'components/organisms/CategoryList'
interface Props extends BoxProps {
  post: Post
  clickDisabled?: boolean
  number?: number
}

export const PostListItem = React.memo(function PostListItem({
  post,
  number,
  clickDisabled,
  ...boxProps
}: Props) {
  return !clickDisabled && post.slug ? (
    <Box {...boxProps}>
      <Link href={`/posts/${post?.slug}`}>
        <BasePostItem post={post} number={number} />
      </Link>
    </Box>
  ) : (
    <Box {...boxProps}>
      <BasePostItem post={post} number={number} />
    </Box>
  )
})

function BasePostItem({ post }: Props) {
  const lineHeight = '1.2em'
  const noOfLines = 2
  const tmpCoverImage = '/img/coverImage.png'
  const coverImgSrc = post?.thumbnailSrc
  const imgSrc = coverImgSrc ? coverImgSrc : tmpCoverImage
  const categories = post.categories
  const hoverColor = useHoverColor()
  const postTitle = post?.title ?? '-'
  const imageRatio = 3 / 4
  const contentHeight = '5.5rem'
  const postListItemSpace = '0.3rem'
  return (
    <HStack
      _hover={{ bgColor: hoverColor }}
      px={postListItemSpace}
      h={contentHeight}
    >
      <AspectRatio
        ratio={imageRatio}
        h={`calc(${contentHeight} - ${postListItemSpace})`}
        w={`calc(${contentHeight} * ${1 / imageRatio})`}
        flex="0 0 auto"
      >
        <Box position="relative">
          <CoverImage name={postTitle} src={imgSrc} objectFit="cover" />
        </Box>
      </AspectRatio>
      <VStack
        pt={`calc(${postListItemSpace} * 2)`}
        pb={postListItemSpace}
        minW="0px"
        align="stretch"
        justify="space-between"
        h="full"
      >
        <Tooltip label={postTitle} placement="top">
          <Heading as="h3" fontWeight="bold" fontSize="sm">
            <Text noOfLines={noOfLines} lineHeight={lineHeight}>
              {postTitle}
            </Text>
          </Heading>
        </Tooltip>
        <CategoryList categories={categories} thin></CategoryList>
      </VStack>
    </HStack>
  )
}

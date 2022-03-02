import React from 'react'
import {
  Text,
  VStack,
  Heading,
  Box,
  HStack,
  Stack,
  Spacer,
  Divider
} from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import { Category, Tag } from 'modules/model'
import { TagList } from 'components/organisms/TagList'
import { CategoryList } from 'components/organisms/CategoryList'
import { useSecondaryText } from 'modules/function'
import { Date } from 'components/atoms/Date'

interface Props extends BoxProps {
  postTitle: string
  postCategories: Nullable<Category[]>
  postDate: Nullable<string>
  postUpdatedDate: Nullable<string>
  postTags: Nullable<Tag[]>
}
export const PostHeading = React.memo(function PostHeading({
  postTitle,
  postCategories,
  postDate,
  postUpdatedDate,
  postTags,
  ...boxProps
}: Props) {
  return (
    <Box {...boxProps}>
      <VStack align="stretch" mx="auto" px="contentSpacingX" spacing="6">
        <Heading
          as="h1"
          textAlign="center"
          fontSize={{ base: '3xl', md: '4xl' }}
          maxW="full"
          pb="6"
        >
          {postTitle}
        </Heading>

        <Divider></Divider>
        <Stack
          spacing="1"
          align="start"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <VStack
            align="start"
            spacing="1"
            flex="0 1 auto"
            minW="0"
            maxW="full"
          >
            <HStack spacing="2" flex="0 1 auto" maxW="full">
              <Text fontSize="md" fontWeight="bold" flex="1 0 auto">
                Categories
              </Text>
              <CategoryList categories={postCategories} overflow="hidden" />
            </HStack>
            <TagList
              tags={postTags}
              color="primary"
              flex="0 1 auto"
              maxW="full"
              overflow="hidden"
            />
          </VStack>
          <Spacer></Spacer>
          <VStack
            fontSize="sm"
            color={useSecondaryText()}
            spacing="1"
            align="end"
            pl={{ base: '0', md: '2' }}
          >
            {postDate && (
              <Box>
                Posted Date: <Date dateIsoString={postDate} />
              </Box>
            )}
            {postUpdatedDate && postUpdatedDate !== postDate && (
              <Box>
                Updated Date: <Date dateIsoString={postUpdatedDate} />
              </Box>
            )}
          </VStack>
        </Stack>
      </VStack>
    </Box>
  )
})

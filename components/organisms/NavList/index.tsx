import React from 'react'
import { Icon, Stack, Text } from '@chakra-ui/react'
import type { StackProps, StackDirection } from '@chakra-ui/react'
import { FaHome } from 'react-icons/fa'
import { HiViewList } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { Link } from 'components/atoms/Link'
import { Category } from 'modules/model'
import { TextButton } from 'components/atoms/TextButton'

interface Props extends StackProps {
  categories: Nullable<Category[]>
  hiddenHome?: boolean
  hoverColor?: string
  direction?: StackDirection
}
export const NavList = React.memo(function NavList({
  categories,
  hiddenHome,
  hoverColor,
  direction = 'column',
  ...stackProps
}: Props) {
  const router = useRouter()
  const width = (['column', 'column-reverse'] as StackDirection[]).includes(
    direction
  )
    ? 'full'
    : undefined

  return (
    <Stack
      align="stretch"
      spacing="1"
      fontWeight="bold"
      overflow="auto"
      direction={direction}
      {...stackProps}
    >
      {!hiddenHome && (
        <Link href={`/`} minW="0" maxW="full">
          <TextButton
            hoverColor={hoverColor}
            w={width}
            onClick={() => router.push('/')}
            leftIcon={<Icon as={FaHome} color="primary"></Icon>}
          >
            <Text minW="0">HOME</Text>
          </TextButton>
        </Link>
      )}
      {categories &&
        categories.length > 0 &&
        categories.map((category) => {
          const categorySlug = category.slug
          const categoryColor = category.color ?? 'primary'
          const categoryName = category.title
          const categoryId = category.id
          return (
            categorySlug &&
            categoryName && (
              <Link
                key={categoryId}
                href={`/categories/${categorySlug}`}
                minW="0"
                maxW="full"
              >
                <TextButton
                  w={width}
                  hoverColor={hoverColor}
                  leftIcon={<Icon as={HiViewList} color={categoryColor}></Icon>}
                >
                  <Text minW="0">{categoryName}</Text>
                </TextButton>
              </Link>
            )
          )
        })}
    </Stack>
  )
})

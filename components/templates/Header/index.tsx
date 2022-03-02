import {
  Flex,
  IconButton,
  HStack,
  Spacer,
  Box,
  Icon,
  Text,
  VStack,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
  Popover,
  Button
} from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineViewList } from 'react-icons/hi'
import { ChevronDownIcon } from '@chakra-ui/icons'
import chroma from 'chroma-js'
import { Link } from 'components/atoms/Link'
import { useBgColor } from 'modules/function'
import { Category } from 'modules/model'
import { NavList } from 'components/organisms/NavList'
import { SITE_NAME } from 'modules/const'
export interface Props extends FlexProps {
  categories: Nullable<Category[]>
  hoverColor?: string
}

type PresenterProps = Props

export const Header = React.memo(function Header({
  categories,
  hoverColor,
  ...flexProps
}: PresenterProps) {
  const headerSpace = 5
  const bgColor = useBgColor()
  return (
    <Flex
      alignItems="center"
      bg={chroma(bgColor).alpha(0.5).css()}
      filter="auto"
      backdropFilter="blur(3px)"
      as="header"
      py="headerPadding"
      px="contentSpacingX"
      h="headerHeight"
      borderWidth="1px"
      top="0"
      position="sticky"
      zIndex="sticky"
      {...flexProps}
    >
      <Link href="/" display="flex" alignItems="center" justifyContent="center">
        {/* https://github.com/chakra-ui/chakra-ui/issues/3658#issuecomment-807299129
          > Change Heading to <Box as="h1" /> so it correctly applies text styles. */}
        <Box as="h1" textStyle="headerHeading">
          {SITE_NAME}
        </Box>
      </Link>
      <Spacer></Spacer>
      <Popover placement="bottom">
        <PopoverTrigger>
          <IconButton
            aria-label="Menu"
            variant="solid"
            bgColor="inherit"
            borderWidth="1px"
            display={{ base: 'flex', md: 'none' }}
            isRound
          >
            <Icon as={HiOutlineViewList}></Icon>
          </IconButton>
        </PopoverTrigger>
        <PopoverContent p="2">
          <PopoverBody bgColor={bgColor}>
            <VStack align="stretch" spacing="4" flex="1">
              <Box>
                <Text fontSize="sm" mb="1">
                  Categories
                </Text>
                <NavList
                  categories={categories}
                  hoverColor={hoverColor}
                  hiddenHome
                />
              </Box>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <HStack
        h="full"
        spacing={headerSpace}
        display={{ base: 'none', md: 'flex' }}
        borderRadius="full"
      >
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button
              variant="solid"
              bgColor="inherit"
              rightIcon={<ChevronDownIcon />}
              hoverColor={hoverColor}
              display={{ base: 'none', md: 'flex' }}
            >
              Categories
            </Button>
          </PopoverTrigger>
          <PopoverContent w="auto" px="2">
            <PopoverBody>
              <NavList categories={categories} hiddenHome />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
    </Flex>
  )
})

import { Tag, TagLabel, forwardRef } from '@chakra-ui/react'
import type { TagProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends TagProps {
  name: string
  isText?: boolean
  disableShadow?: boolean
  enableHover?: boolean
  isActive?: boolean
  leftIcon?: React.ReactElement
}

export const AccentTag = forwardRef<Props, 'span'>(function AccentTag(
  {
    name,
    isText,
    enableHover,
    disableShadow,
    isActive,
    bg,
    leftIcon,
    ...tagProps
  }: Props,
  ref
) {
  const activeHover = 'md'
  return (
    <Tag
      ref={ref}
      boxShadow={isText || disableShadow ? 0 : isActive ? activeHover : 'xs'}
      bg={isText ? 'transparent' : bg}
      _hover={{
        boxShadow: isText || !enableHover ? 0 : activeHover
      }}
      borderRadius="full"
      variant="solid"
      b="primary"
      fontWeight="bold"
      {...tagProps}
    >
      {leftIcon}
      <TagLabel>{name}</TagLabel>
    </Tag>
  )
})

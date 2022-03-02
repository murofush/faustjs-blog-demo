import type { TagProps } from '@chakra-ui/react'
import { forwardRef } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'components/atoms/Link'
import { AccentTag } from 'components/atoms/AccentTag'
interface Props extends TagProps {
  href: string
  name: string
  isText?: boolean
  clickDisabled?: boolean
  leftIcon?: React.ReactElement
}
export const LinkTag = forwardRef<Props, 'span'>(function LinkTag(
  { href, name, isText, clickDisabled, leftIcon, ...tagProps }: Props,
  ref
) {
  return !clickDisabled && href ? (
    <Link href={href}>
      <AccentTag
        ref={ref}
        name={name}
        isText={isText}
        enableHover
        leftIcon={leftIcon}
        {...tagProps}
      ></AccentTag>
    </Link>
  ) : (
    <AccentTag
      ref={ref}
      name={name}
      isText={isText}
      enableHover={false}
      leftIcon={leftIcon}
      {...tagProps}
    ></AccentTag>
  )
})

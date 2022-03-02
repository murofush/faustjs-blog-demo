// Ref: https://github.com/chakra-ui/chakra-ui/issues/132
// Code: https://github.com/chakra-ui/chakra-ui/blob/main/examples/nextjs-typescript/components/NextChakraLink.tsx

import { PropsWithChildren } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { Link as ChackraLink, forwardRef } from '@chakra-ui/react'
import type { LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { isExternalLink } from 'modules/function'
type Props = {
  underline?: boolean
} & PropsWithChildren<NextLinkProps & ChakraLinkProps>
export const Link = forwardRef<Props, 'a'>(function Link(
  {
    href,
    as,
    replace,
    scroll,
    shallow,
    prefetch,
    children,
    underline,
    isExternal,
    ...chakraProps
  }: Props,
  ref
) {
  const actualExternal = isExternal ?? isExternalLink(href)

  return (
    <NextLink
      passHref={true}
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
    >
      <ChackraLink
        ref={ref}
        _hover={{
          textDecoration: underline ? 'underline' : 'none'
        }}
        isExternal={actualExternal}
        {...chakraProps}
      >
        {children}
      </ChackraLink>
    </NextLink>
  )
})

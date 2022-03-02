import { Image, Skeleton, forwardRef } from '@chakra-ui/react'
import type { ImageProps } from '@chakra-ui/react'
import React from 'react'
interface Props extends ImageProps {
  name: Nullable<string>
}

export const CoverImage = forwardRef<Props, 'img'>(function CoverImage(
  { name, ...imageProps }: Props,
  ref
) {
  return (
    <Image
      ref={ref}
      objectFit="contain"
      fallback={<Skeleton w="100%" h="100%" />}
      alt={name ? `${name} Image` : undefined}
      {...imageProps}
    />
  )
})

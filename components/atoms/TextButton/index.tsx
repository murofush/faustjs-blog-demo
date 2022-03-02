import { forwardRef, Button } from '@chakra-ui/react'
import type { ButtonProps } from '@chakra-ui/react'
import { themeColors } from 'modules/theme'

interface Props extends Omit<ButtonProps, 'bgColor'> {
  disableHover?: boolean
  hoverColor?: string
}
export const TextButton = forwardRef<Props, 'button'>(function TextButton(
  { disableHover, hoverColor = themeColors.primary, ...buttonProps }: Props,
  ref
) {
  return (
    <Button
      ref={ref}
      bgColor="text"
      __hover={{ bgColor: disableHover ? undefined : hoverColor }}
      boxShadow="none"
      variant="ghost"
      whiteSpace="normal"
      justifyContent="start"
      textAlign="start"
      height="auto"
      py="2"
      px="3"
      {...buttonProps}
    />
  )
})

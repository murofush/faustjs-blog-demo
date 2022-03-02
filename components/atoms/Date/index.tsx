import { format as formatFns, parseISO, isValid } from 'date-fns'
import { Text, forwardRef } from '@chakra-ui/react'
import type { TextProps } from '@chakra-ui/react'

interface Props extends TextProps {
  dateIsoString: string
  format?: string
}

export const Date = forwardRef<Props, 'time'>(function Date(
  { dateIsoString, format = 'yyyy/MM/dd', ...textProps }: Props,
  ref
) {
  const date = dateIsoString ? parseISO(dateIsoString) : undefined
  return date && isValid(date) ? (
    <Text
      ref={ref}
      as="time"
      {...textProps}
      whiteSpace="nowrap"
      dateTime={dateIsoString}
    >
      {formatFns(date, format)}
    </Text>
  ) : (
    <div>-</div>
  )
})

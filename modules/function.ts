import { useRouter } from 'next/router'
import { theme, useColorModeValue } from '@chakra-ui/react'
import chroma from 'chroma-js'
import { useCallback } from 'react'
import { URL } from 'modules/const'
import { themeColors } from 'modules/theme'

export function filterAbsolutelyArray<T>(
  args: Nullable<T>[] | null | undefined
): T[] {
  return args ? (args.filter(Boolean) as T[]) : []
}

// chakra-ui Default Theme
// https://chakra-ui.com/docs/theming/theme

export function useBgColor() {
  return useColorModeValue(themeColors.bgLight, themeColors.bgDark)
}

export function useSecondaryText() {
  return useColorModeValue(themeColors.gray[600], themeColors.gray[400])
}

export function useHoverBaseColor() {
  return useColorModeValue(theme.colors.orange[700], theme.colors.white)
}

export function useHoverColor() {
  return chroma(useHoverBaseColor()).alpha(0.1).css()
}

export function getAbsoluteUrl(asPath: string, appendHash?: boolean) {
  const path = appendHash ? asPath : asPath?.split('#')[0]
  return `${URL}${path}`
}

export function isExternalLink(url: string) {
  const reg = new RegExp(URL)
  return !(reg.test(url) || url.charAt(0) === '/')
}

// URLの`#`以降の文字列を取り出すユーティリティ
function extractHash(url: string | undefined): string {
  return (url && decodeURIComponent(url.split('#')[1])) ?? ''
}
export function useHashstate(): [string, (newHash: string) => void] {
  const router = useRouter()
  const hash = extractHash(router.asPath)
  const setHash = useCallback(
    (newHash: string | null) => {
      router.replace({ hash: newHash }, undefined, { shallow: true })
    },
    [router]
  )
  return [hash, setHash]
}

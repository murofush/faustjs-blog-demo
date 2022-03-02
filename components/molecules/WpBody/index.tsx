import React, { useCallback } from 'react'
import {
  Box,
  useClipboard,
  Icon,
  Heading,
  Text,
  IconButton,
  Button
} from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import { HiOutlineClipboardCheck, HiCheck } from 'react-icons/hi'
import range from 'lodash/range'
import parse, {
  domToReact,
  attributesToProps,
  DOMNode
} from 'html-react-parser'
import { BiLink } from 'react-icons/bi'
import { useHashstate, isExternalLink } from 'modules/function'
import { themeColors } from 'modules/theme'
import { Link } from 'components/atoms/Link'
interface Props extends BoxProps {
  content: string
  styles: { readonly [key: string]: string }
}

interface CodeCopyButtonProps {
  code: string | null
}

export const WpBody = React.memo(function WpBody({
  content,
  styles,
  ...BoxProps
}: Props) {
  const [_, setHash] = useHashstate()
  const getAllText = React.useCallback((node: DOMNode): string => {
    if (!('children' in node)) {
      return ''
    }
    return node.children
      .map((childN: DOMNode) => {
        if ('data' in childN && typeof childN.data === 'string') {
          return (childN as any).data.trim()
        }

        return getAllText(childN)
      })
      .join('')
  }, [])
  const parser = useCallback(
    (input: string) =>
      parse(input, {
        replace: (domNode) => {
          if (
            'name' in domNode &&
            'attribs' in domNode &&
            'children' in domNode
          ) {
            // a要素
            if (domNode.name === 'a') {
              if (domNode.attribs.href) {
                if (isExternalLink(domNode.attribs.href)) {
                  // 外部リンク
                  domNode.attribs.target = '_blank'
                  domNode.attribs.rel = 'noopener noreferrer'
                } else {
                  // サイト内リンク（かつ、hrefが存在する場合）
                  return (
                    <Link
                      href={domNode.attribs.href}
                      {...attributesToProps(domNode.attribs)}
                    >
                      {domToReact(domNode.children)}
                    </Link>
                  )
                }
              }
            }

            // pre要素（wp-block-code）
            if (
              !!domNode.attribs.class &&
              domNode.attribs.class === 'wp-block-code'
            ) {
              const code = getAllText(domNode)
              return (
                <Box
                  as="pre"
                  p="relative"
                  {...attributesToProps(domNode.attribs)}
                >
                  <CodeCopyButton code={code}></CodeCopyButton>
                  {domToReact(domNode.children)}
                </Box>
              )
            }
            // Heading要素
            if (
              range(4)
                .map((hNum) => `h${hNum + 1}`)
                .includes(domNode.name)
            ) {
              // Headingに内部Textと同じIDを付与する
              const domName = domNode.name as keyof JSX.IntrinsicElements
              const domText = encodeURIComponent(getAllText(domNode))
              domNode.attribs.id = domText
              // Heading要素（LinkIconButtonの追加実装）
              return (
                <Heading
                  as={domName}
                  role="group"
                  {...attributesToProps(domNode.attribs)}
                >
                  {domToReact(domNode.children)}
                  <IconButton
                    aria-label="Copy Link"
                    variant="text"
                    aria-hidden="true"
                    bgColor="inherit"
                    opacity="0"
                    _groupHover={{
                      opacity: '1'
                    }}
                    onClick={() => {
                      setHash(`#${domNode.attribs.id}`)
                    }}
                    icon={<Icon as={BiLink} />}
                  ></IconButton>
                </Heading>
              )
            }
          }
        }
      }),
    [getAllText, setHash]
  )

  const CodeCopyButton = ({ code }: CodeCopyButtonProps) => {
    const { hasCopied, onCopy } = useClipboard(code ?? '')
    const bgColor = hasCopied ? themeColors.primary : themeColors.gray[800]
    return (
      <Button
        onClick={onCopy}
        bgColor={bgColor}
        size="sm"
        position="absolute"
        top="2"
        right="2"
      >
        <Text as="span" className="code_copy_button_icon">
          <Icon
            as={hasCopied ? HiCheck : HiOutlineClipboardCheck}
            mr="1"
          ></Icon>
        </Text>
        {hasCopied ? 'Copied!' : 'Copy'}
        {}
      </Button>
    )
  }

  return (
    <>
      <Box className={`${styles.content}`} {...BoxProps}>
        {parser(content)}
      </Box>
    </>
  )
})

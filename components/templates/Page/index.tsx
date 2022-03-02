import React from 'react'
import { Heading, VStack, Grid, Box } from '@chakra-ui/react'
import { PageBody } from 'components/molecules/PageBody'
import { Category, Page as PageType } from 'modules/model'
import { NavList } from 'components/organisms/NavList'

interface Props {
  page: PageType
  categories?: Category[]
}

export const Page = React.memo(function Page({ page, categories }: Props) {
  const pageBody = page?.content ?? ''

  const postBaseWidth = '768px'
  const leftContentWidth = 'minmax(250px, 300px)'
  const postExpandWidth = `minmax(650px, ${postBaseWidth})`
  return (
    <>
      <VStack as="main">
        <Grid
          py="contentSpacingY"
          w="auto"
          px={{ base: 0, lg: 'contentSpacingX' }}
          templateColumns={{
            base: `minmax(0, ${postBaseWidth})`,
            lg: `${leftContentWidth} ${postExpandWidth} 0`
          }}
          gap={{
            sm: 6,
            xl: 9,
            '2xl': 12
          }}
        >
          <Box display={{ base: 'none', lg: 'block' }}>
            <NavList
              categories={categories}
              spacing="2"
              pl="2"
              py="2"
              borderLeftWidth="1px"
              position="sticky"
              top="headerToSpacing"
              maxH="100vh"
            ></NavList>
          </Box>

          <VStack align="stretch">
            <Heading
              as="h1"
              textAlign="center"
              mt="4"
              mb="8"
              fontSize={{ base: '4xl', md: '5xl' }}
            >
              {page?.title ?? '-'}
            </Heading>
            <PageBody content={pageBody} maxW="800px" />
          </VStack>
        </Grid>
      </VStack>
    </>
  )
})

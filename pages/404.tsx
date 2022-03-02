import { Center, Box } from '@chakra-ui/react'
import React from 'react'
import { DynamicMeta } from 'modules/dynamicMeta'
import { Link } from 'components/atoms/Link'

export default function Page() {
  return (
    <>
      <DynamicMeta title="404 NOT FOUND" />
      <Center h="70vh" flexDirection="column">
        <Box fontSize="6xl">404 Not Found</Box>
        <Link href="/">Back to Top</Link>
      </Center>
    </>
  )
}

import type { Story } from '@storybook/react'
import { Box } from '@chakra-ui/react'
import { CoverImage } from './'

export default {
  component: CoverImage
}

const Template: Story<React.ComponentProps<typeof CoverImage>> = (args) => (
  <Box w="400px" h="150px">
    {' '}
    <CoverImage {...args}></CoverImage>
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  src: 'https://placehold.jp/400x150.png',
  name: 'testImage'
}

export const Fallback = Template.bind({})
Fallback.args = {
  src: '',
  name: 'testImage'
}

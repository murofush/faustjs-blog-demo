import type { Story } from '@storybook/react'
import { PostListItem } from './'
import { _generateMockPost } from '__tests__/mock'

export default {
  component: PostListItem
}

const Template: Story<React.ComponentProps<typeof PostListItem>> = (args) => (
  <PostListItem {...args}></PostListItem>
)

export const Default = Template.bind({})
Default.args = {
  post: _generateMockPost()
}

export const LargeValue = Template.bind({})
LargeValue.args = {
  post: _generateMockPost({ largeValue: true })
}

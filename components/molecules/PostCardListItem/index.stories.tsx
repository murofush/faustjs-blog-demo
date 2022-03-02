import type { Story } from '@storybook/react'
import { PostCardListItem } from './'
import { _generateMockPost } from '__tests__/mock'

export default {
  component: PostCardListItem
}

const Template: Story<React.ComponentProps<typeof PostCardListItem>> = (
  args
) => <PostCardListItem {...args}></PostCardListItem>

export const Default = Template.bind({})
Default.args = {
  post: _generateMockPost()
}

export const LargeValue = Template.bind({})
LargeValue.args = {
  post: _generateMockPost({ largeValue: true })
}

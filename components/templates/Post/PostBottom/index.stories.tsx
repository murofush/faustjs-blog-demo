import type { Story } from '@storybook/react'
import { PostBottom } from '.'
import { _generateMockPosts } from '__tests__/mock'
export default {
  component: PostBottom
}

const Template: Story<React.ComponentProps<typeof PostBottom>> = (args) => (
  <PostBottom {...args}></PostBottom>
)

export const Default = Template.bind({})
Default.args = {
  recentPosts: _generateMockPosts(3)
}

export const LargeValue = Template.bind({})
LargeValue.args = {
  recentPosts: _generateMockPosts(3, {
    largeValue: true
  })
}

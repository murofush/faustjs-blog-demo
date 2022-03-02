import type { Story } from '@storybook/react'
import { PostList } from '.'
import { _generateMockPosts } from '__tests__/mock'

export default {
  component: PostList
}

const Template: Story<React.ComponentProps<typeof PostList>> = (args) => (
  <PostList {...args}></PostList>
)

export const Default = Template.bind({})
Default.args = {
  posts: _generateMockPosts(),
  w: '400px'
}

export const LargeValue = Template.bind({})
LargeValue.args = {
  posts: _generateMockPosts(3, { largeValue: true })
}

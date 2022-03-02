import type { Story } from '@storybook/react'
import { PostCardList } from '.'
import { _generateMockPosts } from '__tests__/mock'

export default {
  component: PostCardList
}

const Template: Story<React.ComponentProps<typeof PostCardList>> = (args) => (
  <PostCardList {...args}></PostCardList>
)

export const Default = Template.bind({})
Default.args = {
  posts: _generateMockPosts()
}

export const LargeValue = Template.bind({})
LargeValue.args = {
  posts: _generateMockPosts(3, { largeValue: true })
}

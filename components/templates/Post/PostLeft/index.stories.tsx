import type { Story } from '@storybook/react'
import { PostLeft } from './'
import { _generateMockCategories, _generateMockPosts } from '__tests__/mock'
export default {
  component: PostLeft
}

const Template: Story<React.ComponentProps<typeof PostLeft>> = (args) => (
  <PostLeft {...args}></PostLeft>
)

export const Default = Template.bind({})
Default.args = {
  categories: _generateMockCategories(3),
  recentPosts: _generateMockPosts(3)
}

export const LargeValue = Template.bind({})
LargeValue.args = {
  categories: _generateMockCategories(3, { largeValue: true }),
  recentPosts: _generateMockPosts(3, {
    largeValue: true
  })
}

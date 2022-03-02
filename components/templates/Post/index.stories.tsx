import type { Story } from '@storybook/react'
import { Post } from '.'
import {
  _generateMockCategories,
  _generateMockContentElement,
  _generateMockPost,
  _generateMockPosts
} from '__tests__/mock'
export default {
  component: Post
}
const contentElement = _generateMockContentElement()

const Template: Story<React.ComponentProps<typeof Post>> = (args) => (
  <Post {...args}></Post>
)

export const Default = Template.bind({})
Default.args = {
  post: _generateMockPost({ content: contentElement.element.outerHTML }),
  categories: _generateMockCategories(3),
  recentPosts: _generateMockPosts(3)
}

const largeContentElement = _generateMockContentElement({ largeValue: true })
export const LargeValue = Template.bind({})
LargeValue.args = {
  post: _generateMockPost({
    largeValue: true,
    content: largeContentElement.element.outerHTML
  }),
  categories: _generateMockCategories(3, {
    largeValue: true
  }),
  recentPosts: _generateMockPosts(3, {
    largeValue: true
  })
}

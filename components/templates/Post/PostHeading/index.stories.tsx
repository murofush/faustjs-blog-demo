import type { Story } from '@storybook/react'
import { PostHeading } from '.'
import { _generateMockPost } from '__tests__/mock'
export default {
  component: PostHeading
}

const Template: Story<React.ComponentProps<typeof PostHeading>> = (args) => (
  <PostHeading {...args}></PostHeading>
)

const post = _generateMockPost()
export const Default = Template.bind({})
Default.args = {
  postTitle: post.title,
  postCategories: post.categories,
  postDate: post.createdDate,
  postUpdatedDate: post.updatedDate,
  postTags: post.tags
}

const longTxtPost = _generateMockPost({ largeValue: true })
export const LargeValue = Template.bind({})
LargeValue.args = {
  postTitle: longTxtPost.title,
  postCategories: longTxtPost.categories,
  postDate: longTxtPost.createdDate,
  postUpdatedDate: longTxtPost.updatedDate,
  postTags: longTxtPost.tags
}

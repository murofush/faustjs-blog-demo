import type { Story } from '@storybook/react'
import { PostBody } from '.'
import { _generateMockContentElement } from '__tests__/mock'

export default {
  component: PostBody
}

const contentElement = _generateMockContentElement()

const Template: Story<React.ComponentProps<typeof PostBody>> = (args) => (
  <PostBody {...args}></PostBody>
)

export const Default = Template.bind({})
Default.args = {
  content: contentElement.element.outerHTML
}

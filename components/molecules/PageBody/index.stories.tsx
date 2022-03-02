import type { Story } from '@storybook/react'
import { PageBody } from '.'
import { _generateMockContentElement } from '__tests__/mock'

export default {
  component: PageBody
}

const contentElement = _generateMockContentElement()

const Template: Story<React.ComponentProps<typeof PageBody>> = (args) => (
  <PageBody {...args}></PageBody>
)

export const Default = Template.bind({})
Default.args = {
  content: contentElement.element.outerHTML
}

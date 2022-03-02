import type { Story } from '@storybook/react'
import { LinkTag } from './'
export default {
  component: LinkTag
}

const Template: Story<React.ComponentProps<typeof LinkTag>> = (args) => (
  <LinkTag {...args}>Content</LinkTag>
)

export const Default = Template.bind({})
Default.args = {
  href: '/dummy_link',
  name: 'Content'
}

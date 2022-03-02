import type { Story } from '@storybook/react'
import { AccentTag } from './'

export default {
  component: AccentTag
}

const Template: Story<React.ComponentProps<typeof AccentTag>> = (args) => (
  <AccentTag {...args}></AccentTag>
)

export const Default = Template.bind({})
Default.args = {
  name: 'Tag'
}

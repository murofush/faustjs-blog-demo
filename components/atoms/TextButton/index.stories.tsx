import type { Story } from '@storybook/react'
import { TextButton } from './'

export default {
  component: TextButton
}

const Template: Story<React.ComponentProps<typeof TextButton>> = (args) => (
  <TextButton {...args}>Content</TextButton>
)

export const Default = Template.bind({})

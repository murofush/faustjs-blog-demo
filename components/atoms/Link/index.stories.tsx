import type { Story } from '@storybook/react'
import { Link } from './'
export default {
  component: Link
}

const Template: Story<React.ComponentProps<typeof Link>> = (args) => (
  <Link {...args}>Content</Link>
)

export const Default = Template.bind({})
Default.args = {
  href: '/dummy_link'
}

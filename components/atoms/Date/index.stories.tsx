import type { Story } from '@storybook/react'
import { Date } from './'

export default {
  component: Date
}

const Template: Story<React.ComponentProps<typeof Date>> = (args) => (
  <Date {...args}>Content</Date>
)

export const Default = Template.bind({})
Default.args = {
  dateIsoString: '1999-07-31T00:00:00.000Z'
}

export const Format = Template.bind({})
Format.args = {
  dateIsoString: '1999-07-31T00:00:00.000Z',
  format: 'yyyy-MM-dd'
}

export const InvalidDate = Template.bind({})
InvalidDate.args = {
  dateIsoString: '1999-07-32'
}

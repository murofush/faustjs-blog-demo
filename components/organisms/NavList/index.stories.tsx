import type { Story } from '@storybook/react'
import { NavList } from '.'
import { _generateMockCategories } from '__tests__/mock'

export default {
  component: NavList
}

const Template: Story<React.ComponentProps<typeof NavList>> = (args) => (
  <NavList {...args}></NavList>
)

export const Default = Template.bind({})
Default.args = {
  categories: _generateMockCategories(),
  w: '300px'
}

export const LargeValue = Template.bind({})
LargeValue.args = {
  categories: _generateMockCategories(100, { largeValue: true })
}

import type { Story } from '@storybook/react'
import { Home } from '.'
import { _generateMockCategories, _generateMockTags } from '__tests__/mock'

export default {
  component: Home
}

const Template: Story<React.ComponentProps<typeof Home>> = (args) => (
  <Home {...args}></Home>
)

export const Default = Template.bind({})
Default.args = {
  categories: _generateMockCategories(3),
  tags: _generateMockTags(3)
}

import type { Story } from '@storybook/react'
import { CategoryList } from '.'
import { _generateMockCategories } from '__tests__/mock'

export default {
  component: CategoryList
}

const Template: Story<React.ComponentProps<typeof CategoryList>> = (args) => (
  <CategoryList {...args}>Content</CategoryList>
)

export const Default = Template.bind({})
Default.args = {
  categories: _generateMockCategories()
}

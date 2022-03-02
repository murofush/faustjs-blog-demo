import type { Story } from '@storybook/react'
import { ComponentProps } from 'react'
import { Header } from './'
import { _generateMockCategories } from '__tests__/mock'
export default {
  component: Header
}

const Template: Story<ComponentProps<typeof Header>> = (args) => (
  <Header {...args}></Header>
)

export const Default = Template.bind({})
Default.args = {
  categories: _generateMockCategories(3)
}

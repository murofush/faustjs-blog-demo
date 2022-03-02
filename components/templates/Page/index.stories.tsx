import type { Story } from '@storybook/react'
import { Page } from '.'
import { _generateMockCategories, _generateMockPage } from '__tests__/mock'
export default {
  component: Page
}

const Template: Story<React.ComponentProps<typeof Page>> = (args) => (
  <Page {...args}></Page>
)

export const Default = Template.bind({})
Default.args = {
  page: _generateMockPage(),
  categories: _generateMockCategories(3)
}

export const LargeValue = Template.bind({})
LargeValue.args = {
  page: _generateMockPage({ largeValue: true }),
  categories: _generateMockCategories(100, { largeValue: true })
}

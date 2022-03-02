import type { Story } from '@storybook/react'
import { CategorySearchResult } from '.'
import { _generateMockCategories, _generateMockPosts } from '__tests__/mock'
export default {
  component: CategorySearchResult
}

const Template: Story<React.ComponentProps<typeof CategorySearchResult>> = (
  args
) => <CategorySearchResult {...args}></CategorySearchResult>

const categories = _generateMockCategories(3)

export const Default = Template.bind({})
Default.args = {
  categories: categories,
  category: categories[0],
  posts: _generateMockPosts(3)
}

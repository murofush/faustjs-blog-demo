import type { Story } from '@storybook/react'
import { TagList } from '.'
import { _generateMockTags } from '__tests__/mock'
export default {
  component: TagList
}

const Template: Story<React.ComponentProps<typeof TagList>> = (args) => (
  <TagList {...args}></TagList>
)

export const Default = Template.bind({})
Default.args = {
  tags: _generateMockTags()
}

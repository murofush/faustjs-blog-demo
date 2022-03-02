import React from 'react'
import styles from './index.module.scss'
import { WpBody } from 'components/molecules/WpBody'

type Props = Omit<React.ComponentProps<typeof WpBody>, 'styles'>

export const PostBody = React.memo(function PostBody({
  ...WpBodyProps
}: Props) {
  return <WpBody {...WpBodyProps} styles={styles} />
})

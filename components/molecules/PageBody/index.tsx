import React from 'react'
import styles from './index.module.scss'
import { WpBody } from 'components/molecules/WpBody'

type Props = Omit<React.ComponentProps<typeof WpBody>, 'styles'>

export const PageBody = React.memo(function PageBody({
  ...WpBodyProps
}: Props) {
  return <WpBody {...WpBodyProps} styles={styles} />
})

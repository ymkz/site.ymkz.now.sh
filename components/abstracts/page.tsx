import React from 'react'
import styled from '@emotion/styled'
import Header from '~/components/modules/header'

type Props = {
  children: React.ReactNode
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 768px;
  min-height: calc(100vh - 64px);
  padding: 0 16px;
`

function Page({ children }: Props) {
  return (
    <React.Fragment>
      <Header />
      <Main>{children}</Main>
    </React.Fragment>
  )
}

export default Page

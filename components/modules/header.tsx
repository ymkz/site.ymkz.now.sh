import React from 'react'
// @ts-ignore
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { breakpoints } from '~/constants/breakpoints'
import { Row } from '~/components/abstracts/row'
import { NavLink } from '~/components/elements/nav-link'
import { LogoIcon } from '~/components/elements/logo-icon'

const Container = styled.header`
  align-items: center;
  background-color: var(--base-background);
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding: 0 48px;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  @media ${breakpoints.mobile} {
    padding: 0 16px;
  }
`

export function Header() {
  const { pathname } = useRouter()
  const switchTheme = () => {
    const prevTheme = localStorage.getItem('theme') || 'light'
    const nextTheme = prevTheme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('theme', nextTheme)
    localStorage.setItem('theme', nextTheme)
  }
  return (
    <Container>
      <Row space={8}>
        <LogoIcon onClick={switchTheme} />
        <NavLink href="/" pathname={pathname}>
          ymkz
        </NavLink>
      </Row>
      <Row space={16}>
        <NavLink href="/about" pathname={pathname}>
          about
        </NavLink>
        <NavLink href="/work" pathname={pathname}>
          work
        </NavLink>
      </Row>
    </Container>
  )
}

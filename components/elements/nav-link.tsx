import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

type Props = {
  href: string
  pathname: string | undefined
  children: React.ReactNode
}

type AnchorProps = {
  root: boolean
  active: boolean
}

const Anchor = styled.a<AnchorProps>`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: ${({ active, root }) => (active || root ? '900' : '300')};
  pointer-events: ${({ active }) => active && 'none'};
  text-decoration-line: none;
  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
  &:focus {
    outline: 0;
    text-decoration-line: underline;
  }
`

function NavLink({ href, pathname, children }: Props) {
  const active = href === pathname
  const root = href === '/'

  return (
    <Link href={href}>
      <Anchor active={active} root={root} tabIndex={active ? -1 : 0}>
        {children}
      </Anchor>
    </Link>
  )
}

export default NavLink

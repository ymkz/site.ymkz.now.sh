import React from 'react'
import styled from '@emotion/styled'

type IconLinkProps = {
  label?: string
  href: string
  src: string
}

export const IconLink: React.FC<IconLinkProps> = ({ label, href, src }) => {
  return (
    <Container
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: src }}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    ></Container>
  )
}

const Container = styled.a`
  border-bottom: 1px solid transparent;
  color: var(--base-text);
  height: 40px;
  width: 40px;
  &:focus {
    border-bottom: 1px solid var(--base-text);
    outline: 0;
  }
  & > svg {
    height: 40px;
    stroke: var(--base-text);
    width: 40px;
  }
`
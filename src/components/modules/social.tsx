import styled from '@emotion/styled'
import React from 'react'

import { SectionContainer } from '~/components/abstracts/section-container'
import { IconLink } from '~/components/elements/icon-link'
import { SectionTitle } from '~/components/elements/section-title'
import facebook from '~/images/icons/facebook.svg?include'
import github from '~/images/icons/github.svg?include'
import linkedin from '~/images/icons/linkedin.svg?include'
import twitter from '~/images/icons/twitter.svg?include'

export const Social = () => {
  return (
    <SectionContainer id="social">
      <SectionTitle>Social</SectionTitle>
      <List>
        <IconLink src={github} href="https://github.com/ymkz" name="@ymkz" />
        <IconLink src={twitter} href="https://twitter.com/ymkzly" name="@ymkzly" />
        <IconLink src={facebook} href="https://facebook.com/ymkzly" name="/ymkzly" />
        <IconLink src={linkedin} href="https://www.linkedin.com/in/ymkz/" name="/in/ymkz" />
      </List>
    </SectionContainer>
  )
}

const List = styled.ul`
  padding: 0;
  margin-top: 8px;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`
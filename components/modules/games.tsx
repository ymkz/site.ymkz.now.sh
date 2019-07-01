import React from 'react'
import { BaseRow } from '~/components/abstracts/base-row'
import { SectionContainer } from '~/components/abstracts/section-container'
import { SectionTitle } from '~/components/elements/section-title'
import { TextItem } from '~/components/elements/text-item'

export function Games() {
  return (
    <SectionContainer id="games">
      <SectionTitle>Games</SectionTitle>
      <BaseRow space={24}>
        <TextItem>PLAYERUNKNOWN&apos;S BATTLEGROUNDS</TextItem>
        <TextItem>Overwatch</TextItem>
        <TextItem>Battlefield 4</TextItem>
        <TextItem>Battlefield V</TextItem>
        <TextItem>Counter-Strike: Global Offensive</TextItem>
      </BaseRow>
    </SectionContainer>
  )
}

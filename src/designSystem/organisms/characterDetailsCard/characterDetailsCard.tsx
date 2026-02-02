import React from 'react';
import type { Character } from '../../../app/services/api/types';
import { Box } from '../../atoms/box/box';
import { Card, ImageWrapper, StyledImage, Content, NameHeading } from './characterDetailsCard.styles';
import { InfoRow } from '../../molecules/infoRow/infoRow';
import { StatusBadge } from '../../molecules/statusBadge/statusBadge';

export interface CharacterDetailsCardProps {
  character: Character;
  id?: string;
}

export const CharacterDetailsCard: React.FC<CharacterDetailsCardProps> = ({ 
  character, 
  id = `character-details-${character.id}` 
}) => {
  return (
    <Card id={id} data-testid={id}>
      <ImageWrapper>
        <StyledImage src={character.image} alt={character.name} />
      </ImageWrapper>
      <Content>
        <NameHeading as="h1" size="xxl" weight="900" color="primary">{character.name}</NameHeading>
        
        <Box margin="0 0 2rem 0">
          <StatusBadge status={character.status} species={character.species} />
        </Box>

        <InfoRow label="Gender" value={character.gender} />
        <InfoRow label="Origin" value={character.origin.name} />
        <InfoRow label="Last Known Location" value={character.location.name} />
        <InfoRow label="Episodes" value={`${character.episode.length} episodes`} />
      </Content>
    </Card>
  );
};

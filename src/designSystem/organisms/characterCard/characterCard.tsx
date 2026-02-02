import React, { memo } from 'react';
import type { Character } from '../../../app/services/api/types';
import { Box } from '../../atoms/box/box';
import { CardContainer, Content } from './characterCard.styles';
import { Image } from '../../atoms/image/image';
import { StatusBadge } from '../../molecules/statusBadge/statusBadge';
import { Text } from '../../atoms/text/text';

export interface CharacterCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  character: Character;
  priority?: boolean;
  id?: string;
}

export const CharacterCard: React.FC<CharacterCardProps> = memo(({ 
  character, 
  priority = false, 
  id = `character-card-${character.id}`,
  ...props 
}) => {
  return (
    <CardContainer 
      to={`/details/${character.id}`} 
      id={id}
      {...props}
    >
      <Image 
        src={character.image} 
        alt={character.name} 
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"} 
        height={400}
        width={400}
      />
      <Content>
        <Text as="h2" size="lg" weight="700" color="primary" ellipsis>{character.name}</Text>
        <StatusBadge status={character.status} species={character.species} />
        <Box>
           <Text size="sm" color="textSecondary">Last known location:</Text>
           <Text size="sm" color="text">{character.location.name}</Text>
        </Box>
      </Content>
    </CardContainer>
  );
});

CharacterCard.displayName = 'CharacterCard';

import React from 'react';
import type { Character } from '../../services/api/api';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../services/api/apiHooks/useCharacter/useCharacter';
import { CharacterDetailsCard } from '../../../designSystem/organisms/characterDetailsCard/characterDetailsCard';
import { Backdrop } from '../../../designSystem/atoms/backdrop/backdrop';
import { ErrorPage } from '../../../designSystem/organisms/errorPage/errorPage';
import { ApiError } from '../../utils/error/errors';
import { BackLink } from './detailsPage.styles';
import { isNil } from '../../utils/typeGuards/typeGuards';


interface DetailsPageViewProps {
  character?: Character;
  isLoading: boolean;
  error?: Error | null;
}

export const DetailsPageView: React.FC<DetailsPageViewProps> = ({ character, isLoading, error }) => {
  if (isLoading) return <Backdrop />;

  if (error) {
    if (error instanceof ApiError && error.status === 404) {
      return <ErrorPage message="Character not found 404" />;
    }
    return <ErrorPage message={error.message} />;
  }

  if (isNil(character)) return <ErrorPage message="Character not found" />;

  return (
    <>
      <BackLink to="/">← Back to Listing</BackLink>
      <CharacterDetailsCard character={character} />
    </>
  );
};

export const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: character, isLoading, error } = useCharacter(id);

  return <DetailsPageView character={character} isLoading={isLoading} error={error} />;
};

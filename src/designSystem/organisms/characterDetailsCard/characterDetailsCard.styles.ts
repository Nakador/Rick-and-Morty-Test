import styled from 'styled-components';
import { ImageAtom } from '../../atoms/image/image';
import { Text } from '../../atoms/text/text';

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: ${(props) => props.theme.radii.xl};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.md};
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1/1;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 300px;
    height: auto;
    flex-shrink: 0;
  }
`;

export const StyledImage = styled(ImageAtom)`
  height: 100%;
`;

export const Content = styled.div`
  padding: ${(props) => props.theme.spacing.xl};
  flex: 1;
`;

export const NameHeading = styled(Text)`
  margin-bottom: 0.5rem;
`;

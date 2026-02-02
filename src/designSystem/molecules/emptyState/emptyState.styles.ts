import styled from 'styled-components';
import { ImageAtom } from '../../atoms/image/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  gap: ${(props) => props.theme.spacing.md};
`;

export const StyledImage = styled(ImageAtom)`
  max-width: 300px;
  height: auto;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

export const Message = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
  width: 40rem;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.lg};
  padding: 0;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

import styled from 'styled-components';
import { Button } from '../button/button';

export const ScrollButton = styled(Button)<{ $isVisible: boolean }>`
  position: fixed;
  bottom: ${(props) => props.theme.spacing.xl};
  right: ${(props) => props.theme.spacing.xl};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.onPrimary};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.$isVisible ? '1' : '0')};
  visibility: ${(props) => (props.$isVisible ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    transform 0.2s;
  z-index: ${(props) => props.theme.zIndices.modal};

  &:hover {
    transform: translateY(-2px);
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

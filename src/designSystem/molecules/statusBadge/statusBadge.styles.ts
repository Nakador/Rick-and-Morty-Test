import styled from 'styled-components';

export const StatusDot = styled.div<{ status: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.status) {
      case 'Alive': return props.theme.colors.status.alive;
      case 'Dead': return props.theme.colors.status.dead;
      default: return props.theme.colors.status.unknown;
    }
  }};
`;

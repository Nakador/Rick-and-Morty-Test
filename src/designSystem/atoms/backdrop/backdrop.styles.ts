import styled, { keyframes } from 'styled-components';
import { ImageAtom } from '../image/image';

const float = keyframes`
  0% { 
    transform: translateY(0) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(5deg); 
  }
  100% { 
    transform: translateY(0) rotate(0deg); 
  }
`;

export const RickHead = styled(ImageAtom)`
  width: 120px; 
  height: 120px;
  animation: ${float} 2s ease-in-out infinite;
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3));
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${props => props.theme.zIndices.tooltip};
  backdrop-filter: blur(4px);
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

import styled, { keyframes } from 'assets/themes';

export const FallbackWrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 1.5rem 1rem;
  align-items: center;
  justify-content: center;
`;

export const bounce = keyframes`
  0% {
    transform: translateY(0rem);
  }
  50%{
    transform: translateY(1.5rem);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Dot = styled.div<{ delay: number }>`
  width: 0.5rem;
  height: 1rem;
  border-radius: 2rem;
  background: ${(props) => props.theme.colors.accent};
  animation: ${bounce} 0.75s ease-in-out infinite ${({ delay }) => delay}s alternate;
`;

export const DotsWrapper = styled.div`
  gap: 0.75rem;
  display: flex;
  flex-direction: row;
`;

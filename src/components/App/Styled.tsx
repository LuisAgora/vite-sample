import styled, { css } from 'styled-components';

export const bodyWidth = 1200;

export const Wrapper = styled.div`
  max-width: ${bodyWidth}px;
  width: 90%;
  margin: 0 auto;
`;

export const Title = styled.span<{ marginBottom?: boolean }>`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 37px;
  margin-bottom: ${({ marginBottom = true }) => (marginBottom ? '2rem' : 0)};
`;

export const scrollCSS = css`
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #f4f4f4;
    border-radius: 4px;
  }
`;

export const cardShadow = css`
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.2);
  }
`;

export const secondLineEllipsis = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

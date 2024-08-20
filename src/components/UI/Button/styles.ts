import styled, { css } from 'styled-components';
import { colors } from '../../../styles';


const baseStyles = css`
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 18px;
`;

export const PrimaryButton = styled.button`
  ${baseStyles}
  background-color: ${colors.blue}; 
  color: white;
  border: 1px solid ${colors.blue};

  &:hover {
    background-color: ${colors.hoverBlue}
  }
`;

export const SecondaryButton = styled.button`
  ${baseStyles}
  background-color: transparent;
  border: 1px solid black;
  color: black;

  &:hover {
    color: ${colors.lightGrey}; 
    background-color: black;
  }
`;

export const TextButton = styled.button`
  ${baseStyles}
  background-color: transparent;
  color: black;

  &:hover {
    color: ${colors.grey}; 
  }
`;

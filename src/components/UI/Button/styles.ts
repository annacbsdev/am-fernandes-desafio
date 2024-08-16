import styled, { css } from 'styled-components';
import { colors } from '../../../styles';


const baseStyles = css`
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 18px;
  font-weight: 500;
`;

export const PrimaryButton = styled.button`
  ${baseStyles}
  background-color: ${colors.brown}; 
  color: white;
  border: 1px solid ${colors.brown};

  &:hover {
    background-color: ${colors.hoverBrown}
  }
`;

export const SecondaryButton = styled.button`
  ${baseStyles}
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    color: ${colors.grey}; 
    border: 1px solid ${colors.grey}
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

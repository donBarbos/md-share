import styled from 'styled-components'

export const StyledBurger = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`

export const StyledBar = styled.span`
  display: block;
  border-radius: 6px;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  background-color: var(--fg);

  @media only screen and (max-width: 768px) {
    .active &:nth-child(2) {
      opacity: 0;
    }

    .active &:nth-child(1) {
      -webkit-transform: translateY(8px) rotate(45deg);
      transform: translateY(8px) rotate(45deg);
    }

    .active &:nth-child(3) {
      -webkit-transform: translateY(-8px) rotate(-45deg);
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`

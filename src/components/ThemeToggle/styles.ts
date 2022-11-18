import styled from 'styled-components'

export const StyledButton = styled.button`
  font-size: 0.9rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid;
  padding: 5px;
  text-align: center;
  margin: 0;
  cursor: pointer;
  outline: none;
  display: block;
  background-color: var(--bg);

  &:hover {
    border: 1px solid var(--accent-color);
  }
`

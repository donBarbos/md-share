import styled from 'styled-components'

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 16rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border: 2px dashed #555;
  color: var(--fg);
  transition: color 0.1s ease-in-out, border 0.1s ease-in-out;
  cursor: pointer;

  &:active {
    border-color: var(--accent-color);
  }

  input[type='file'] {
    font-size: 16px;
    cursor: pointer;
    margin-top: 12px;
  }
  input[type='file']::file-selector-button {
    margin-right: 1rem;
    border: 2px solid var(--bg);
    padding: 10px 20px;
    border-radius: 10px;
    color: var(--bg);
    background: var(--fg);
  }
  input[type='file']::file-selector-button:hover {
    border: 2px solid var(--accent-color);
  }
`

export const DropTitle = styled.span`
  color: var(--fg);
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
`

export const StyledButton = styled.button`
  width: 10rem;
  height: 3rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: var(--fg);
  background: var(--bg);
  border-color: var(--accent-color);
  transition-duration: 0.4s;

  &:hover {
    color: var(--bg);
    background: var(--accent-color);
  }
`

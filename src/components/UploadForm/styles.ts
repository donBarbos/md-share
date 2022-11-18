import styled from 'styled-components'

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  * {
    transition: color 0.1s, background 0.1s;
  }
`

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 4rem;
  width: 100%;
  max-width: 50rem;
  height: 16rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border: 2px dashed #555;
  color: var(--fg);
  cursor: pointer;

  &:active {
    border-color: var(--accent-color);
  }

  input[type='file'] {
    font-size: 16px;
    cursor: pointer;
    margin-top: 12px;
    width: 95%;
    max-width: 18rem;
    transition: color 0.1s, background 0.1s, border 0.1s;
  }
  input[type='file']::file-selector-button {
    margin-right: 1rem;
    border: 2px solid var(--bg);
    padding: 10px 20px;
    border-radius: 10px;
    color: var(--bg);
    background: var(--fg);
    transition: color 0.1s, background 0.1s, border 0.1s;
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
  transition: color 0.4s ease-in-out, background 0.4s ease-in-out;

  &:hover {
    color: var(--bg);
    background: var(--accent-color);
  }
`

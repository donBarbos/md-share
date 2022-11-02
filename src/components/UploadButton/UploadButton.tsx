import styled from 'styled-components'

const UploadButton = () => {
  return (
    <StyledButton>
      <form>
        <input type="file" id="actual-btn" hidden />

        <label for="actual-btn">Choose File</label>

        <span id="file-chosen">No file chosen</span>
      </form>
    </StyledButton>
  )
}

export default UploadButton

const StyledButton = styled.div`
  label {
    background-color: indigo;
    color: white;
    padding: 0.5rem;
    font-family: sans-serif;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-top: 1rem;
  }

  .file-chosen {
    margin-left: 0.3rem;
    font-family: sans-serif;
  }
`

import { StyledButton } from './styles'

const UploadButton = () => {
  return (
    <StyledButton>
      <form>
        <input type="file" id="actual-btn" hidden />

        <label htmlFor="actual-btn">Choose File</label>

        <span id="file-chosen">No file chosen</span>
      </form>
    </StyledButton>
  )
}

export default UploadButton

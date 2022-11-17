import { StyledForm, StyledLabel, DropTitle, StyledButton } from './styles'

const UploadForm = () => {
  return (
    <StyledForm action="/api/form" method="post">
      <StyledLabel>
        <DropTitle>Drag & drop file here</DropTitle>
        or
        <input type="file" accept=".md, .txt" required />
      </StyledLabel>
      <StyledButton type="submit">SHARE</StyledButton>
    </StyledForm>
  )
}

export default UploadForm

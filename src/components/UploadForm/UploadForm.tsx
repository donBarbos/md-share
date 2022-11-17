import { StyledLabel, DropTitle, StyledButton } from './styles'

const UploadForm = () => {
  return (
    <form action="/api/form" method="post">
      <StyledLabel>
        <DropTitle>Drag & drop file here</DropTitle>
        or
        <input type="file" accept=".md, .txt" required />
      </StyledLabel>
      <StyledButton type="submit">SHARE</StyledButton>
    </form>
  )
}

export default UploadForm

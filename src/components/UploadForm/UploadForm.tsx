import * as Styled from './styles'

const UploadForm = () => {
  return (
    <Styled.Form action="/api/form" method="post">
      <Styled.Label>
        <Styled.DropTitle>Drag & drop file here</Styled.DropTitle>
        or
        <input type="file" accept=".md, .txt" required />
      </Styled.Label>
      <Styled.Button type="submit">SHARE</Styled.Button>
    </Styled.Form>
  )
}

export default UploadForm

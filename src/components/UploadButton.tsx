import styled from 'styled-components'

const UploadButton = () => {
  return (
    <StyledButton>
      <form>
        <input type="file" />
        <p>Drag your files here or click in this area.</p>
        <button type="submit">Upload</button>
      </form>
    </StyledButton>
  )
}

export default UploadButton

const StyledButton = styled.div`
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -250px;
    width: 500px;
    height: 200px;
    border: 4px dashed #fff;
  }
  form p {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 170px;
    color: #ffffff;
    font-family: Arial;
  }
  form input {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
  }
  form button {
    margin: 0;
    color: #fff;
    background: #16a085;
    border: none;
    width: 508px;
    height: 35px;
    margin-top: -20px;
    margin-left: -4px;
    border-radius: 4px;
    border-bottom: 4px solid #117a60;
    transition: all 0.2s ease;
    outline: none;
  }
  form button:hover {
    background: #149174;
    color: #0c5645;
  }
  form button:active {
    border: 0;
  }

  font-size: 1.6rem;
  border-radius: 12px;
  text-align: center;
  display: inline-block;
  padding: 15px 32px;
  cursor: pointer;
  flex: 1 1 auto;

  :hover {
    filter: brightness(80%);
  }
`

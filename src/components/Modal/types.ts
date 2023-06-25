export type ModalProps = {
  isActive: boolean
  setActive: (active: boolean) => void
  children?: JSX.Element | JSX.Element[]
}

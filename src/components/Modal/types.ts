import { ReactChild } from 'react'

export type ModalProps = {
  isActive: boolean
  setActive: (active: boolean) => void
  children?: ReactChild | ReactChild[]
}

import { Modal } from '@components/Modal'
import { ShareContent } from '@components/ShareContent'
import { ErrorContent } from '@components/ErrorContent'

import type { ResultModalProps } from './types'

export const ResultModal = ({ isActive, setActive, result }: ResultModalProps) => {
  return (
    <Modal isActive={isActive} setActive={setActive}>
      {result ? (
        result.success ? (
          <ShareContent slug={result.slug} />
        ) : (
          <ErrorContent error={result.message} />
        )
      ) : (
        <></>
      )}
    </Modal>
  )
}

import { GlowButton } from '@components/GlowButton'

import type { SubmitButtonProps } from './types'

export const SubmitButton = ({ isLoading }: SubmitButtonProps) => {
  return (
    <GlowButton
      text="SHARE"
      type="submit"
      title="Share selected file"
      formMethod="post"
      disabled={isLoading}
    />
  )
}

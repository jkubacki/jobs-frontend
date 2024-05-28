import { AppState } from '@/lib/store'

export const RepliesSelectors = {
  replyingTo: (state: AppState) => state.replies.replyingTo,
  replying: (state: AppState) => state.replies.replying,
  replyingError: (state: AppState) => state.replies.replyingError,
}

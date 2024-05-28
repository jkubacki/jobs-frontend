import { AppState } from '@/lib/store'

export const RepliesSelectors = {
  replyingTo: (state: AppState) => state.replies.replyingTo,
  creating: (state: AppState) => state.replies.creating,
  creatingError: (state: AppState) => state.replies.creatingError,
}

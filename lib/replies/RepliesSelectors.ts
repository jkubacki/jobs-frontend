import { AppState } from '@/lib/store'

export const RepliesSelectors = {
  creatingFor: (state: AppState) => state.replies.creatingFor,
  creating: (state: AppState) => state.replies.creating,
  creatingError: (state: AppState) => state.replies.creatingError,
}

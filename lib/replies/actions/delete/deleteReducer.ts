import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { RepliesState } from '@/lib/replies/repliesSlice'
import { Reply } from '@/lib/replies/types/Reply'

export function deleteReducer(
  state: Draft<RepliesState>,
  _action: PayloadAction<{ reply: Reply }>
) {}

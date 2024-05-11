import { Job } from '@/lib/jobs/types/Job'
import { ApiResponse, apiGet } from '@/utils/api'

export interface LoadApiSuccess extends ApiResponse {
  data: Job[]
}

export function loadApi() {
  return apiGet(`/jobs`)
}

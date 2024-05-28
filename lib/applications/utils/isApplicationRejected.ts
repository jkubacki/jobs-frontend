import { Application } from '@/lib/applications/types/Application'

export function isApplicationRejected(application: Application) {
  return application.replies.length > 0 && application.replies.some(reply => reply.rejected)
}

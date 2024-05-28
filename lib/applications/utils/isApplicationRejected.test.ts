import { isApplicationRejected } from '@/lib/applications/utils/isApplicationRejected'
import { applicationFactory } from '@/utils/factories/application'
import { replyFactory } from '@/utils/factories/reply'

describe('isApplicationRejected', () => {
  describe('without replies', () => {
    const application = applicationFactory.build({ replies: [] })

    it('returns false', () => {
      expect(isApplicationRejected(application)).toBe(false)
    })
  })

  describe('without rejected replies', () => {
    const application = applicationFactory.build({
      replies: replyFactory.buildList(2, { rejected: false }),
    })

    it('returns false', () => {
      expect(isApplicationRejected(application)).toBe(false)
    })
  })

  describe('with all rejected replies', () => {
    const application = applicationFactory.build({
      replies: replyFactory.buildList(2, { rejected: true }),
    })

    it('returns true', () => {
      expect(isApplicationRejected(application)).toBe(true)
    })
  })

  describe('with one rejected reply and not rejected', () => {
    const application = applicationFactory.build({
      replies: [replyFactory.build({ rejected: true }), replyFactory.build({ rejected: false })],
    })

    it('returns true', () => {
      expect(isApplicationRejected(application)).toBe(true)
    })
  })
})

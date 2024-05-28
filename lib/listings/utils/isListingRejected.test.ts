import { isListingRejected } from '@/lib/listings/utils/isListingRejected'
import { applicationFactory } from '@/utils/factories/application'
import { listingFactory } from '@/utils/factories/listing'
import { replyFactory } from '@/utils/factories/reply'

describe('isListingRejected', () => {
  describe('without applications', () => {
    const listing = listingFactory.build({ applications: [] })

    it('returns false', () => {
      expect(isListingRejected(listing)).toBe(false)
    })
  })

  describe('with no rejected applications', () => {
    const notRejectedApplication = applicationFactory.build({ replies: [] })
    const otherNotRejectedApplication = applicationFactory.build({
      replies: replyFactory.buildList(2, { rejected: false }),
    })
    const listing = listingFactory.build({
      applications: [notRejectedApplication, otherNotRejectedApplication],
    })

    it('returns false', () => {
      expect(isListingRejected(listing)).toBe(false)
    })
  })

  describe('with some rejected applications', () => {
    const rejectedApplication = applicationFactory.build({
      replies: replyFactory.buildList(2, { rejected: true }),
    })
    const notRejectedApplication = applicationFactory.build({ replies: [] })
    const listing = listingFactory.build({
      applications: [rejectedApplication, notRejectedApplication],
    })

    it('returns false', () => {
      expect(isListingRejected(listing)).toBe(false)
    })
  })

  describe('with all rejected applications', () => {
    const rejectedApplication = applicationFactory.build({
      replies: replyFactory.buildList(2, { rejected: true }),
    })
    const otherRejectedApplication = applicationFactory.build({
      replies: replyFactory.buildList(2, { rejected: true }),
    })
    const listing = listingFactory.build({
      applications: [rejectedApplication, otherRejectedApplication],
    })

    it('returns true', () => {
      expect(isListingRejected(listing)).toBe(true)
    })
  })
})

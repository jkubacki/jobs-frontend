import { remoteFilterNameSelector } from '@/lib/listings/selectors/remoteFilterNameSelector'
import { AppState } from '@/lib/store'

describe('remoteFilterNameSelector', () => {
  describe('when remoteFilter is null', () => {
    it('returns null', () => {
      const state = {
        listings: {
          remoteFilter: null,
        },
      } as AppState

      const remoteFilterName = remoteFilterNameSelector(state)

      expect(remoteFilterName).toEqual(null)
    })
  })

  describe('when remoteFilter is true', () => {
    it('returns remote', () => {
      const state = {
        listings: {
          remoteFilter: true,
        },
      } as AppState

      const remoteFilterName = remoteFilterNameSelector(state)

      expect(remoteFilterName).toEqual('remote')
    })
  })

  describe('when remoteFilter is false', () => {
    it('returns on site', () => {
      const state = {
        listings: {
          remoteFilter: false,
        },
      } as AppState

      const remoteFilterName = remoteFilterNameSelector(state)

      expect(remoteFilterName).toEqual('on site')
    })
  })
})

const { getAwardedTimestamps, getBadgeInfo, setCookie } = require('../lib')

beforeAll(() => {
  return new Promise(resolve => {
    setCookie(process.env.COOKIE).then(() => {
      resolve()
    })
  })
})

describe('Badges Methods', () => {
  it('getAwardedTimestamps() [NUMBER] returns when badges were awarded to a player', () => {
    return getAwardedTimestamps(2416399685, 2124549302).then((res) => {
      expect(res).toEqual(
        expect.arrayContaining([{
          badgeId: expect.any(Number),
          awardedDate: expect.any(Date)
        }])
      )
    })
  })

  it('getAwardedTimestamps() [ARRAY] returns when badges were awarded to a player', () => {
    return getAwardedTimestamps(2416399685, [2124549302, 2124549305, 2124549306]).then((res) => {
      expect(res).toEqual(
        expect.arrayContaining([{
          badgeId: expect.any(Number),
          awardedDate: expect.any(Date)
        }])
      )
    })
  })

  it('getBadgeInfo() returns information on the provided badge ID', () => {
    return getBadgeInfo(459405541).then((res) => {
      return expect(res).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        description: expect.any(String),
        enabled: expect.any(Boolean),
        iconImageId: expect.any(Number),
        created: expect.any(Date),
        updated: expect.any(Date),
        statistics: expect.any(Object),
        awardingUniverse: expect.any(Object)
      })
    })
  })
})

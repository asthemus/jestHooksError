import {func} from './index'

beforeAll(() => {
	afterAll(() => {
		console.log('hello')
	})
})

describe('test func', () => {
		console.log('hello')
		test('return 10', async () => {
				expect(await func(10)).toBe(10)
		})
		test('return 10', async () => {
				expect(await func(20)).toBe(20)
		})
})

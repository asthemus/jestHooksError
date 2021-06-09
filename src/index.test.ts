// import {func} from './index'
import {timeoutFn} from './app'

describe('test func', () => {
		test("test timeoutFn", () => {
			jest.useFakeTimers()
			timeoutFn()
			expect(setTimeout).toBeCalled()
		})
})

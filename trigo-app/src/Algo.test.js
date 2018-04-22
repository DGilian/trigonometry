import segmentLength from './AlgoSegmentLength'
import angleTriangle from './AlgoAngleTriangle'
import algo from './Algo'

describe('Algo', () => {

    it('should work 1', () => {
        const result = segmentLength(1, 1, 2, 2)
        expect(result).toBe("1.41")
    })

    it('should work 2', () => {
        const result = angleTriangle(10, 10, 10)
        expect(result).toBe("3")
    })
    it('should work finish', () => {
        const result = algo(5, 10, -20, 20, 150, 250)
        expect(result).toBe("45")
    })
})
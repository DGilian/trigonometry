import segmentLength from './AlgoSegmentLength'
import angleTriangle from './AlgoAngleTriangle'

export default function algo(xA, yA, xB, yB, xC, yC) {

    let ab = segmentLength(xA, yA, xB, yB)
    let bc = segmentLength(xB, yB, xC, yC)
    let ca = segmentLength(xC, yC, xA, yA)

    let angle = angleTriangle(ab, bc, ca)

    return angle
}
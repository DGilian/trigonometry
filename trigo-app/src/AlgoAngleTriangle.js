export default function angleTriangle(segment1, segment2, oppositeSegment) {

    let angle = Math.acos((Math.pow(segment1, 2) + Math.pow(segment2, 2) - Math.pow(oppositeSegment, 2)) / (2 * segment1 * segment2)) * 180 / Math.PI;

    return angle
}
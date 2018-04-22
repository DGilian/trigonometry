export default function segmentLength(xA, yA, xB, yB) {

    let lgX = Math.abs(xA - xB)
    let lgY = Math.abs(yA - yB)


    let lgAB = parseInt((Math.sqrt(Math.pow(lgX, 2) + Math.pow(lgY, 2))))

    return lgAB
}
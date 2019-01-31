

exports.binaryFormat = binaryStr => {
    if ( binaryStr === null || binaryStr === undefined || ( typeof binaryStr !== 'string' ) ) {
        return 
    }
    let str = binaryStr ,
        reg = /(.{8})/ug ,
        result = str.replace( reg ,`$1\u{20}` ).trim()
    return result
}
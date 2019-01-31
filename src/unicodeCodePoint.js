



exports.unicodeCodePoint = theString => {
    if ( theString === undefined || theString === null ) {
        return
    }
    let uStr = ''
    for ( let char of theString ) {
        let theUnicode = char.codePointAt( 0 ).toString( 16 )
        theUnicode = `\\u{${theUnicode}}`
        uStr += theUnicode
    }
    return uStr
}
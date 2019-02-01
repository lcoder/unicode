



exports.unicodeCodePoint = theString => {
    if ( theString === undefined || theString === null ) {
        return
    }
    let uStr = []
    for ( let char of theString ) {
        let theUnicode = char.codePointAt( 0 ).toString( 16 )
        theUnicode = `U+${ theUnicode.toUpperCase().padStart( 4 , '0' ) }`
        uStr.push( theUnicode )
    }
    return uStr.join( '\u{20}' )
}
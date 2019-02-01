const x = 'x'
// 获取填充模板
const gTemp = byteSize => {
    if ( ( typeof byteSize !== 'number' ) || byteSize < 1 || byteSize > 4 ) {
        throw new Error( `请输入1~4的数字` )
    }
    if ( byteSize === 1 ) {
        return '0'.padEnd( 8 , x )
    } else {
        let first = ( '1'.repeat( byteSize ) + '0' ).padEnd( 8 , x ) ,
            other = '10'.padEnd( 8 , x ) ,
            loop = byteSize - 1 ,
            str = first
        for( let i = 0 ; i < loop ; i++ ) {
            str += other
        }
        return str
    }
}

// 用 100111101100000 去填充x 1110xxxx10xxxxxx10xxxxxx
const fillTemp = ( temp , charBinary ) => {
    let charBinaryArr = Array.from( charBinary )
    for( let i = charBinaryArr.length - 1 ; i >= 0 ; i-- ) {
        let char = charBinaryArr[ i ]
            lastXIndex = temp.lastIndexOf( x )
        if ( lastXIndex !== -1 ) {
            let head = temp.substring( 0 , lastXIndex )
                rest = temp.substring( lastXIndex + 1 )
            temp = head + char + rest
        }
    }
    return temp.replace( x , '0' )
}

function codePoint2UTF8Binary( char ) {
    if ( char === undefined || char === null || ( typeof char !== 'string' ) ) {
        throw new Error( `请输入合法的字符` )
    }
    let codePoint = char.codePointAt( 0 ) ,
        charBinary = Number( codePoint ).toString( 2 ) ,
        oneByte = codePoint >= 0x0 && codePoint <= 0x007F ,
        twoByte = codePoint >= 0x80 && codePoint <= 0x07FF ,
        threeByte = codePoint >= 0x800 && codePoint <= 0xFFFF ,
        fourByte = codePoint >= 0x10000 && codePoint <= 0x10FFFF ,
        byteSize = oneByte ? 1 : twoByte ? 2 : threeByte ? 3: fourByte ? 4 : undefined
    if ( byteSize === undefined ) {
        throw new Error( `unicode码点溢出` , char )
    }
    let temp = gTemp( byteSize )
        resultBinary = fillTemp( temp , charBinary )
    return resultBinary
}

exports.codePoint2UTF8Binary = codePoint2UTF8Binary
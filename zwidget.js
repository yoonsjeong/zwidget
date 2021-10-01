function encode_5bit(msg) {
    let msgOut = ""
    for (const letter of msg) {
        msgOut += 
            letter
                .charCodeAt(0)
                .toString(5)
                .padStart(7, "0");
    }
    msgOut = msgOut.replaceAll("0", "\uFEFF")
            .replaceAll("1", "\u200B")
            .replaceAll("2", "\u200C")
            .replaceAll("3", "\u200D")
            .replaceAll("4", "\u2060")
    return msgOut;
}

function decode_5bit(msg) {
    let code = msg
                .replaceAll(/[^(\uFEFF|\u200B|\u200C|\u200D|\u2060)+]/g, "")
                .replaceAll("\uFEFF", "0")
                .replaceAll("\u200B", "1")
                .replaceAll("\u200C", "2")
                .replaceAll("\u200D", "3")
                .replaceAll("\u2060", "4")
    let arr = code.match(/.{7}/g);
    let msgOut = ""
    for (const letter of arr) {
        if (isNaN(parseInt(letter))) continue;
        msgOut += String.fromCharCode(parseInt(letter, 5));
    }
    return msgOut;
}
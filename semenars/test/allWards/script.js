function textContainsAllMords(words, text) {
    var conteinsAllWords = true;
    for (var i = 0; i < words.length; i++) {
        var result = text.indexOf(words[i]);
        if(result === -1) {
            containsAllWords = false;
            break;
        }
    }
    return containsAllWords;
}
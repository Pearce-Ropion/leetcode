var findWords = function(words) {
    if (!words) return null;
    var keyboard = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']
    ];
    var negatives = [];
loop1:
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
    loop2:
        for (var j = 0; j < words[i].length; j++) {
            var nWord = [];
        loop3:
            for (var k = 0; k < keyboard.length; k++) {
                var nLetter = [];
                if (keyboard[k].indexOf(words[i].charAt(j)) == -1) {
                    nLetter.push(k);
                    console.log("letter "+words[i].charAt(j)+" in word "+words[i]+" failed at keyboard: "+k);
                }
                else console.log("letter "+words[i].charAt(j)+" in word "+words[i]+" found in keyboard: "+k);
                if (nLetter.length == 3) {
                    negatives.push(words[i]);
                    break loop2;
                }
            }
        }
    }
    console.log(negatives);
    for (var i = 0; i < negatives.length; i++) {
        var pos = words.indexOf(negatives[i]);
        words.splice(pos, 1);
    }
    return words;
};
var words = ["Hello","Alaska","Dad","Peace"];
console.log(findWords(words));

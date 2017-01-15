
//accent-folding function
var accent_map = {
'ẚ':'a',
'Á':'a',
'á':'a',
'À':'a',
'à':'a',
'Ă':'a',
'ă':'a',
'Ắ':'a',
'ắ':'a',
'Ằ':'a',
'ằ':'a',
'Ẵ':'a',
'ẵ':'a',
'Ẳ':'a',
'ẳ':'a',
'Â':'a',
'â':'a',
'Ấ':'a',
'ấ':'a',
'Ầ':'a',
'ầ':'a',
'Ẫ':'a',
'ẫ':'a',
'Ẩ':'a',
'ẩ':'a',
'Ǎ':'a',
'ǎ':'a',
'Å':'a',
'å':'a',
'Ǻ':'a',
'ǻ':'a',
'Ä':'a',
'ä':'a',
'Ǟ':'a',
'ǟ':'a',
'Ã':'a',
'ã':'a',
'Ȧ':'a',
'ȧ':'a',
'Ǡ':'a',
'ǡ':'a',
'Ą':'a',
'ą':'a',
'Ā':'a',
'ā':'a',
'Ả':'a',
'ả':'a',
'Ȁ':'a',
'ȁ':'a',
'Ȃ':'a',
'ȃ':'a',
'Ạ':'a',
'ạ':'a',
'Ặ':'a',
'ặ':'a',
'Ậ':'a',
'ậ':'a',
'Ḁ':'a',
'ḁ':'a',
'Ⱥ':'a',
'ⱥ':'a',
'Ǽ':'a',
'ǽ':'a',
'Ǣ':'a',
'ǣ':'a',
'Ḃ':'b',
'ḃ':'b',
'Ḅ':'b',
'ḅ':'b',
'Ḇ':'b',
'ḇ':'b',
'Ƀ':'b',
'ƀ':'b',
'ᵬ':'b',
'Ɓ':'b',
'ɓ':'b',
'Ƃ':'b',
'ƃ':'b',
'Ć':'c',
'ć':'c',
'Ĉ':'c',
'ĉ':'c',
'Č':'c',
'č':'c',
'Ċ':'c',
'ċ':'c',
'Ç':'c',
'ç':'c',
'Ḉ':'c',
'ḉ':'c',
'Ȼ':'c',
'ȼ':'c',
'Ƈ':'c',
'ƈ':'c',
'ɕ':'c',
'Ď':'d',
'ď':'d',
'Ḋ':'d',
'ḋ':'d',
'Ḑ':'d',
'ḑ':'d',
'Ḍ':'d',
'ḍ':'d',
'Ḓ':'d',
'ḓ':'d',
'Ḏ':'d',
'ḏ':'d',
'Đ':'d',
'đ':'d',
'ᵭ':'d',
'Ɖ':'d',
'ɖ':'d',
'Ɗ':'d',
'ɗ':'d',
'Ƌ':'d',
'ƌ':'d',
'ȡ':'d',
'ð':'d',
'É':'e',
'Ə':'e',
'Ǝ':'e',
'ǝ':'e',
'é':'e',
'È':'e',
'è':'e',
'Ĕ':'e',
'ĕ':'e',
'Ê':'e',
'ê':'e',
'Ế':'e',
'ế':'e',
'Ề':'e',
'ề':'e',
'Ễ':'e',
'ễ':'e',
'Ể':'e',
'ể':'e',
'Ě':'e',
'ě':'e',
'Ë':'e',
'ë':'e',
'Ẽ':'e',
'ẽ':'e',
'Ė':'e',
'ė':'e',
'Ȩ':'e',
'ȩ':'e',
'Ḝ':'e',
'ḝ':'e',
'Ę':'e',
'ę':'e',
'Ē':'e',
'ē':'e',
'Ḗ':'e',
'ḗ':'e',
'Ḕ':'e',
'ḕ':'e',
'Ẻ':'e',
'ẻ':'e',
'Ȅ':'e',
'ȅ':'e',
'Ȇ':'e',
'ȇ':'e',
'Ẹ':'e',
'ẹ':'e',
'Ệ':'e',
'ệ':'e',
'Ḙ':'e',
'ḙ':'e',
'Ḛ':'e',
'ḛ':'e',
'Ɇ':'e',
'ɇ':'e',
'ɚ':'e',
'ɝ':'e',
'Ḟ':'f',
'ḟ':'f',
'ᵮ':'f',
'Ƒ':'f',
'ƒ':'f',
'Ǵ':'g',
'ǵ':'g',
'Ğ':'g',
'ğ':'g',
'Ĝ':'g',
'ĝ':'g',
'Ǧ':'g',
'ǧ':'g',
'Ġ':'g',
'ġ':'g',
'Ģ':'g',
'ģ':'g',
'Ḡ':'g',
'ḡ':'g',
'Ǥ':'g',
'ǥ':'g',
'Ɠ':'g',
'ɠ':'g',
'Ĥ':'h',
'ĥ':'h',
'Ȟ':'h',
'ȟ':'h',
'Ḧ':'h',
'ḧ':'h',
'Ḣ':'h',
'ḣ':'h',
'Ḩ':'h',
'ḩ':'h',
'Ḥ':'h',
'ḥ':'h',
'Ḫ':'h',
'ḫ':'h',
'H':'h',
'̱':'h',
'ẖ':'h',
'Ħ':'h',
'ħ':'h',
'Ⱨ':'h',
'ⱨ':'h',
'Í':'i',
'í':'i',
'Ì':'i',
'ì':'i',
'Ĭ':'i',
'ĭ':'i',
'Î':'i',
'î':'i',
'Ǐ':'i',
'ǐ':'i',
'Ï':'i',
'ï':'i',
'Ḯ':'i',
'ḯ':'i',
'Ĩ':'i',
'ĩ':'i',
'İ':'i',
'i':'i',
'Į':'i',
'į':'i',
'Ī':'i',
'ī':'i',
'Ỉ':'i',
'ỉ':'i',
'Ȉ':'i',
'ȉ':'i',
'Ȋ':'i',
'ȋ':'i',
'Ị':'i',
'ị':'i',
'Ḭ':'i',
'ḭ':'i',
'I':'i',
'ı':'i',
'Ɨ':'i',
'ɨ':'i',
'Ĵ':'j',
'ĵ':'j',
'J':'j',
'̌':'j',
'ǰ':'j',
'ȷ':'j',
'Ɉ':'j',
'ɉ':'j',
'ʝ':'j',
'ɟ':'j',
'ʄ':'j',
'Ḱ':'k',
'ḱ':'k',
'Ǩ':'k',
'ǩ':'k',
'Ķ':'k',
'ķ':'k',
'Ḳ':'k',
'ḳ':'k',
'Ḵ':'k',
'ḵ':'k',
'Ƙ':'k',
'ƙ':'k',
'Ⱪ':'k',
'ⱪ':'k',
'Ĺ':'a',
'ĺ':'l',
'Ľ':'l',
'ľ':'l',
'Ļ':'l',
'ļ':'l',
'Ḷ':'l',
'ḷ':'l',
'Ḹ':'l',
'ḹ':'l',
'Ḽ':'l',
'ḽ':'l',
'Ḻ':'l',
'ḻ':'l',
'Ł':'l',
'ł':'l',
'Ł':'l',
'̣':'l',
'ł':'l',
'̣':'l',
'Ŀ':'l',
'ŀ':'l',
'Ƚ':'l',
'ƚ':'l',
'Ⱡ':'l',
'ⱡ':'l',
'Ɫ':'l',
'ɫ':'l',
'ɬ':'l',
'ɭ':'l',
'ȴ':'l',
'Ḿ':'m',
'ḿ':'m',
'Ṁ':'m',
'ṁ':'m',
'Ṃ':'m',
'ṃ':'m',
'ɱ':'m',
'Ń':'n',
'ń':'n',
'Ǹ':'n',
'ǹ':'n',
'Ň':'n',
'ň':'n',
'Ñ':'n',
'ñ':'n',
'Ṅ':'n',
'ṅ':'n',
'Ņ':'n',
'ņ':'n',
'Ṇ':'n',
'ṇ':'n',
'Ṋ':'n',
'ṋ':'n',
'Ṉ':'n',
'ṉ':'n',
'Ɲ':'n',
'ɲ':'n',
'Ƞ':'n',
'ƞ':'n',
'ɳ':'n',
'ȵ':'n',
'N':'n',
'̈':'n',
'n':'n',
'̈':'n',
'Ó':'o',
'ó':'o',
'Ò':'o',
'ò':'o',
'Ŏ':'o',
'ŏ':'o',
'Ô':'o',
'ô':'o',
'Ố':'o',
'ố':'o',
'Ồ':'o',
'ồ':'o',
'Ỗ':'o',
'ỗ':'o',
'Ổ':'o',
'ổ':'o',
'Ǒ':'o',
'ǒ':'o',
'Ö':'o',
'ö':'o',
'Ȫ':'o',
'ȫ':'o',
'Ő':'o',
'ő':'o',
'Õ':'o',
'õ':'o',
'Ṍ':'o',
'ṍ':'o',
'Ṏ':'o',
'ṏ':'o',
'Ȭ':'o',
'ȭ':'o',
'Ȯ':'o',
'ȯ':'o',
'Ȱ':'o',
'ȱ':'o',
'Ø':'o',
'ø':'o',
'Ǿ':'o',
'ǿ':'o',
'Ǫ':'o',
'ǫ':'o',
'Ǭ':'o',
'ǭ':'o',
'Ō':'o',
'ō':'o',
'Ṓ':'o',
'ṓ':'o',
'Ṑ':'o',
'ṑ':'o',
'Ỏ':'o',
'ỏ':'o',
'Ȍ':'o',
'ȍ':'o',
'Ȏ':'o',
'ȏ':'o',
'Ơ':'o',
'ơ':'o',
'Ớ':'o',
'ớ':'o',
'Ờ':'o',
'ờ':'o',
'Ỡ':'o',
'ỡ':'o',
'Ở':'o',
'ở':'o',
'Ợ':'o',
'ợ':'o',
'Ọ':'o',
'ọ':'o',
'Ộ':'o',
'ộ':'o',
'Ɵ':'o',
'ɵ':'o',
'Ṕ':'p',
'ṕ':'p',
'Ṗ':'p',
'ṗ':'p',
'Ᵽ':'p',
'Ƥ':'p',
'ƥ':'p',
'P':'p',
'̃':'p',
'p':'p',
'̃':'p',
'ʠ':'q',
'Ɋ':'q',
'ɋ':'q',
'Ŕ':'r',
'ŕ':'r',
'Ř':'r',
'ř':'r',
'Ṙ':'r',
'ṙ':'r',
'Ŗ':'r',
'ŗ':'r',
'Ȑ':'r',
'ȑ':'r',
'Ȓ':'r',
'ȓ':'r',
'Ṛ':'r',
'ṛ':'r',
'Ṝ':'r',
'ṝ':'r',
'Ṟ':'r',
'ṟ':'r',
'Ɍ':'r',
'ɍ':'r',
'ᵲ':'r',
'ɼ':'r',
'Ɽ':'r',
'ɽ':'r',
'ɾ':'r',
'ᵳ':'r',
'ß':'s',
'Ś':'s',
'ś':'s',
'Ṥ':'s',
'ṥ':'s',
'Ŝ':'s',
'ŝ':'s',
'Š':'s',
'š':'s',
'Ṧ':'s',
'ṧ':'s',
'Ṡ':'s',
'ṡ':'s',
'ẛ':'s',
'Ş':'s',
'ş':'s',
'Ṣ':'s',
'ṣ':'s',
'Ṩ':'s',
'ṩ':'s',
'Ș':'s',
'ș':'s',
'ʂ':'s',
'S':'s',
'̩':'s',
's':'s',
'̩':'s',
'Þ':'t',
'þ':'t',
'Ť':'t',
'ť':'t',
'T':'t',
'̈':'t',
'ẗ':'t',
'Ṫ':'t',
'ṫ':'t',
'Ţ':'t',
'ţ':'t',
'Ṭ':'t',
'ṭ':'t',
'Ț':'t',
'ț':'t',
'Ṱ':'t',
'ṱ':'t',
'Ṯ':'t',
'ṯ':'t',
'Ŧ':'t',
'ŧ':'t',
'Ⱦ':'t',
'ⱦ':'t',
'ᵵ':'t',
'ƫ':'t',
'Ƭ':'t',
'ƭ':'t',
'Ʈ':'t',
'ʈ':'t',
'ȶ':'t',
'Ú':'u',
'ú':'u',
'Ù':'u',
'ù':'u',
'Ŭ':'u',
'ŭ':'u',
'Û':'u',
'û':'u',
'Ǔ':'u',
'ǔ':'u',
'Ů':'u',
'ů':'u',
'Ü':'u',
'ü':'u',
'Ǘ':'u',
'ǘ':'u',
'Ǜ':'u',
'ǜ':'u',
'Ǚ':'u',
'ǚ':'u',
'Ǖ':'u',
'ǖ':'u',
'Ű':'u',
'ű':'u',
'Ũ':'u',
'ũ':'u',
'Ṹ':'u',
'ṹ':'u',
'Ų':'u',
'ų':'u',
'Ū':'u',
'ū':'u',
'Ṻ':'u',
'ṻ':'u',
'Ủ':'u',
'ủ':'u',
'Ȕ':'u',
'ȕ':'u',
'Ȗ':'u',
'ȗ':'u',
'Ư':'u',
'ư':'u',
'Ứ':'u',
'ứ':'u',
'Ừ':'u',
'ừ':'u',
'Ữ':'u',
'ữ':'u',
'Ử':'u',
'ử':'u',
'Ự':'u',
'ự':'u',
'Ụ':'u',
'ụ':'u',
'Ṳ':'u',
'ṳ':'u',
'Ṷ':'u',
'ṷ':'u',
'Ṵ':'u',
'ṵ':'u',
'Ʉ':'u',
'ʉ':'u',
'Ṽ':'v',
'ṽ':'v',
'Ṿ':'v',
'ṿ':'v',
'Ʋ':'v',
'ʋ':'v',
'Ẃ':'w',
'ẃ':'w',
'Ẁ':'w',
'ẁ':'w',
'Ŵ':'w',
'ŵ':'w',
'W':'w',
'̊':'w',
'ẘ':'w',
'Ẅ':'w',
'ẅ':'w',
'Ẇ':'w',
'ẇ':'w',
'Ẉ':'w',
'ẉ':'w',
'Ẍ':'x',
'ẍ':'x',
'Ẋ':'x',
'ẋ':'x',
'Ý':'y',
'ý':'y',
'Ỳ':'y',
'ỳ':'y',
'Ŷ':'y',
'ŷ':'y',
'Y':'y',
'̊':'y',
'ẙ':'y',
'Ÿ':'y',
'ÿ':'y',
'Ỹ':'y',
'ỹ':'y',
'Ẏ':'y',
'ẏ':'y',
'Ȳ':'y',
'ȳ':'y',
'Ỷ':'y',
'ỷ':'y',
'Ỵ':'y',
'ỵ':'y',
'ʏ':'y',
'Ɏ':'y',
'ɏ':'y',
'Ƴ':'y',
'ƴ':'y',
'Ź':'z',
'ź':'z',
'Ẑ':'z',
'ẑ':'z',
'Ž':'z',
'ž':'z',
'Ż':'z',
'ż':'z',
'Ẓ':'z',
'ẓ':'z',
'Ẕ':'z',
'ẕ':'z',
'Ƶ':'z',
'ƶ':'z',
'Ȥ':'z',
'ȥ':'z',
'ʐ':'z',
'ʑ':'z',
'Ⱬ':'z',
'ⱬ':'z',
'Ǯ':'z',
'ǯ':'z',
'ƺ':'z',

// Roman fullwidth ascii equivalents: 0xff00 to 0xff5e
'２':'2',
'６':'6',
'Ｂ':'B',
'Ｆ':'F',
'Ｊ':'J',
'Ｎ':'N',
'Ｒ':'R',
'Ｖ':'V',
'Ｚ':'Z',
'ｂ':'b',
'ｆ':'f',
'ｊ':'j',
'ｎ':'n',
'ｒ':'r',
'ｖ':'v',
'ｚ':'z',
'１':'1',
'５':'5',
'９':'9',
'Ａ':'A',
'Ｅ':'E',
'Ｉ':'I',
'Ｍ':'M',
'Ｑ':'Q',
'Ｕ':'U',
'Ｙ':'Y',
'ａ':'a',
'ｅ':'e',
'ｉ':'i',
'ｍ':'m',
'ｑ':'q',
'ｕ':'u',
'ｙ':'y',
'０':'0',
'４':'4',
'８':'8',
'Ｄ':'D',
'Ｈ':'H',
'Ｌ':'L',
'Ｐ':'P',
'Ｔ':'T',
'Ｘ':'X',
'ｄ':'d',
'ｈ':'h',
'ｌ':'l',
'ｐ':'p',
'ｔ':'t',
'ｘ':'x',
'３':'3',
'７':'7',
'Ｃ':'C',
'Ｇ':'G',
'Ｋ':'K',
'Ｏ':'O',
'Ｓ':'S',
'Ｗ':'W',
'ｃ':'c',
'ｇ':'g',
'ｋ':'k',
'ｏ':'o',
'ｓ':'s',
'ｗ':'w'};
module.exports = {
  accent_fold: function (s) {
  	if (!s) { return ''; }
      var ret = '';
      for (var i=0; i<s.length; i++) {
  		ret += accent_map[s.charAt(i)] || s.charAt(i);
      }
      return ret;
  },


  // accent_folded_hilite("Fulanilo López", 'lo')
  //   --> "Fulani<b>lo</b> <b>Ló</b>pez"
  //
  accent_folded_hilite: function (str, q) {
    var str_folded = accent_fold(str).toLowerCase().replace(/[<>]+/g, '');
    var q_folded = accent_fold(q).toLowerCase().replace(/[<>]+/g, '');

    // create an intermediary string with hilite hints
    // example: fulani<lo> <lo>pez
    var re = new RegExp(q_folded, 'g');
    var hilite_hints = str_folded.replace(re, '<'+q_folded+'>');

    // index pointer for the original string
    var spos = 0;
    // accumulator for our final string
    var highlighted = '';

    // walk down the original string and the hilite hint
    // string in parallel. when you encounter a < or > hint,
    // append the opening / closing tag in our final string.
    // if the current char is not a hint, append the corresponding
    // char from the *original* string to our final string and
    // advance the original string's pointer.
    for (var i=0; i<hilite_hints.length; i++) {
      var c = str.charAt(spos);
      var h = hilite_hints.charAt(i);
      if (h === '<') {
         highlighted += '<b>';
      } else if (h === '>') {
         highlighted += '</b>';
      } else {
        spos += 1;
        highlighted += c;
      }
    }
    return highlighted;
  }
};


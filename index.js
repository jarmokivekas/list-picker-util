


var url_string = window.location.href
var url = new URL(url_string);
var orig_words = url.searchParams.get("words").split(',');
console.log(words);

var words = orig_words

function updateName(){
    console.log(words)
    idx = Math.floor(Math.random() * words.length)
    label_elem = document.getElementById('value_label')
    if (words.length == 0){
        label_elem.innerText = 'Loppu'
        return
    }
    label_elem.innerText = words[idx]
    words.splice(idx, 1)
    console.log('popped: ' + idx)
    console.log(words)
    console.log('length: ' + words.length)
}

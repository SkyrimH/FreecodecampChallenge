var temp = '';
var tempFormula = '';

function display(str) {
    $($('#display')[0]).html(str)
}

function input(input) {
    if (/[0-9.+-\/*%]/.test(input)) {
        temp += String(input)
        tempFormula += String(input)
        display(temp)
    } else if (/=/.test(input)) {
        temp = eval(tempFormula)
        display(temp)
        tempFormula = ''
        temp = ''
    } else if (/C/.test(input)) {
        tempFormula = ''
        temp = ''
        display(temp)
    } else if (input === 'Info') {
        alert('Design By SkyrimH')
    }

}

$('button').on('click', click)

function click(event) {
    let text = event.target.innerText
    input(text)
}

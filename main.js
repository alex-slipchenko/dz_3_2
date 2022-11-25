let numOrStr = prompt('imput number or string');

const type = typeof (+numOrStr || numOrStr);
// type && type.trim()
switch (numOrStr && type) {
    case null: console.log('ви скасували');
        break;
    case '': console.log('Empty String');
        break;

    case 'string': console.log('Number is Ba_Nan');
        break;
    default: console.log('OK')
        break;
}
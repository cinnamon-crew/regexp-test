const str = `
010-0000-0001
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddddd
hxyp
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`;

console.log(str.match(/[fox]/g)); // ['o', 'o', 'o', 'o', 'f', 'o', 'o', 'f', 'o', 'x', 'o', 'o', 'x', 'o', 'o']
console.log(str.match(/[0-9]/g)); //  ['0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '7', '0', '3', '5', '6', '0', '1', '2', '3', '4']
console.log(str.match(/[0-9]{1,}/g)); //['010', '0000', '0001', '7035', '60', '1234']
console.log(str.match(/[가-힣]{1,}/g)); // ['동해물과', '백두산이', '마르고', '닳도록']

console.log(str.match(/\w/g)); //(133) ['0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', 't', 'h', 'e', 's', 'e', 'c', 'o', 'n', 'g', 'm', 'a', 'i', 'l', 'c', 'o', 'm', 'h', 't', 't', 'p', 's', 'w', 'w', 'w', 'o', 'm', 'd', 'b', 'a', 'p', 'i', 'c', 'o', 'm', 'a', 'p', 'i', 'k', 'e', 'y', '7', '0', '3', '5', 'c', '6', '0', 'c', 's', 'f', 'r', 'o', 'z', 'e', 'n', 'T', 'h', 'e', 'q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'o', 'x', 'j', 'u', 'm', 'p', 's', 'o', 'v', 'e', 'r', 't', 'h', 'e', 'l', 'a', 'z', 'y', 'd', 'o', …]
console.log(str.match(/\bf\w{1,}\b/g)); // ['frozen', 'fox']

console.log(str.match(/\s/g)); // ['\n', '\n', '\n', '\n', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '\n', '\n', '\n', '\n', ' ', ' ', ' ', '\n']

const h = `   the hello world   !

`;

console.log(h.match(/\s/g)); // [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '\n', '\n']
console.log(h.replace(/\s/g, "")); //thehelloworld!

const text = `
010-0000-0001
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddddd
`;

console.log(text.match(/.{1,}(?=@)/g)); //['thesecon']
console.log(text.match(/(?<=@).{1,}/g)); //['gmail.com']

let str = `
010-0000-0001.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
d
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`;

// const regexp = new RegExp("the", "gi");
const regexp = /the/gi;
console.log(str.match(regexp));

const regexp2 = /fox/gi;
// console.log(regexp2.test(str));
str = str.replace(regexp2, "AAA");
// console.log(str.replace(regexp2, "AAA"));
console.log(str);

console.log(str.match(/the/gi));

console.log(str.match(/\.$/gim));

console.log(str.match(/d$/gm));

console.log(str.match(/^t/gim));

console.log(str.match(/h..p/g));

console.log(str.match(/AAA|dog/g));

console.log(str.match(/https?/g));

console.log(str.match(/d{2,3}/g));

console.log(str.match(/\b\w{2,3}\b/g));

console.log(str.match(/[fox]/g));

console.log(str.match(/[0-9]{1,}/g));

console.log(str.match(/\w/g));

console.log(str.match(/\bf\w{1,}\b/g));

const h = `  the hello  world  !

`;

console.log(h.match(/\s/g));

console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));

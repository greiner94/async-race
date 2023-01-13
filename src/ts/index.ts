console.log('hello from ts!');
function s() {
    fetch('http://localhost:3000/garage')
        .then((res) => res.json())
        .then((res) => console.log(res));
}
s();

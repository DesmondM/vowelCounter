let vowels = ['a','e','i','o','u']
let button = document.getElementById('btn')
let result = document.getElementById('result')
let count = 0;

button.addEventListener('click', countVowels)

function countVowels(){
    let str = document.getElementById('input').value
    for(s of str){
        for(v of vowels){
            if(v==s.toLowerCase()){
                count++;
            }
        }
    }
    result.innerText= `${count} vowels`
}
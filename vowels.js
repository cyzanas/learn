function countVowels(){
    let vowels=["a","e","i","o","u"]
    let ask=prompt("Enter a word: ").toLowerCase()
    let count=0
    
    for(vow of ask){
        console.log(vow)
        if (vowels.includes(vow)){
            count++
            
        }
    }
    console.log(`the word ${ask} includes ${count} vowels`)
}
countVowels()

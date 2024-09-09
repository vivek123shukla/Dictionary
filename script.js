console.log('dictionary app');
let input=document.getElementById('inputpart');
let btn=document.getElementById('btn');
let word=document.getElementById('word');
let pos=document.getElementById('pos');
let meaning=document.getElementById('meaning');
let example=document.getElementById('example');
let synonyms=document.getElementById('synonyms');
let antonym=document.getElementById('antonyms');
btn.addEventListener('click',async(e)=>{
    e.preventDefault();
    let val=input.value;
    let url=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`);
    let data=await url.json();
    let all=data[0].meanings[0];
    word.innerHTML=`Word : ${data[0].word}`;
    pos.innerHTML=`PartOfSpeech : ${all.partOfSpeech}`;
    meaning.innerHTML=`Meaning : ${all.definitions[0].definition}`;
    example.innerHTML=`Example : ${all.definitions[0].example===undefined?'Not found':all.definitions[0].example}`;
    antonym.innerHTML='Antonyms : '
     for(let i=0;i<all.antonyms.length;i++){
         antonym.innerHTML+=`<li>${all.antonyms[i] }<li> `
     }
    synonyms.innerHTML=`Synonyms : ${all.synonyms===''?'Not found':all.synonyms}`;
  console.log(data);
  
    
    })
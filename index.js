const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => tutorials.map(function(tutorial) {
  return tutorial.toLowerCase().split(' ').map(function(word){
    if (word == "oo"){
      return word.toUpperCase()}
    else if (word =="api"){
      return word.toUpperCase()}
    else if (word =="jsonp?"){
      return word = "JSONP?"}
      else if (word == "nan"){
        return word = "NaN"
      }
      else if (word == "stoppropagation"){
        return word = "StopPropagation"
      }
      else if (word == "preventdefault?"){
        return word = "PreventDefault?"
      }
      else{return word.charAt(0).toUpperCase()+ word.slice(1)}}).join(" ")
 })
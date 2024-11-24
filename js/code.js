function newquote(){
    var roll = Math.random() //0   1

    console.log(roll);

    if (roll < 0.05){
        document.getElementById("quote").innerHTML = (" “Be yourself; everyone else is already taken.” ");
        document.getElementById("author").innerHTML = (" -- Oscar Wilde -- ");
    }

    else if (roll < 0.10){
        document.getElementById("quote").innerHTML = (" “Life is like riding a bicycle. To keep your balance, you must keep moving.” ");
        document.getElementById("author").innerHTML = (" -- Albert Einstein -- ");
    }

    else if (roll < 0.15){
        document.getElementById("quote").innerHTML = (" “So many books, so little time.” ");
        document.getElementById("author").innerHTML = (" -- Frank Zappa -- ");
    }

    else if (roll < 0.20){
        document.getElementById("quote").innerHTML = (" “Two things are infinite: the universe and human stupidity and I'm not sure about the universe.” ");
        document.getElementById("author").innerHTML = (" -- Albert Einstein -- ");
    }

    else if (roll < 0.25){
        document.getElementById("quote").innerHTML = (" “A room without books is like a body without a soul.” ");
        document.getElementById("author").innerHTML = (" -- Marcus Tullius Cicero -- ");
    }

    else if (roll < 0.30){
        document.getElementById("quote").innerHTML = (" “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ");
        document.getElementById("author").innerHTML = (" -- Bernard M. Baruch -- ");
    }

    else if (roll < 0.35){
        document.getElementById("quote").innerHTML = (" “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ");
        document.getElementById("author").innerHTML = (" -- Dr. Seuss -- ");
    }

    else if (roll < 0.40){
        document.getElementById("quote").innerHTML = (" “You only live once, but if you do it right, once is enough.” ");
        document.getElementById("author").innerHTML = (" -- Mae West -- ");
    }

    else if (roll < 0.45){
        document.getElementById("quote").innerHTML = (" “In three words I can sum up everything I've learned about life: it goes on.” ");
        document.getElementById("author").innerHTML = (" -- Robert Frost -- ");   
    }

    else if (roll < 0.50){
        document.getElementById("quote").innerHTML = (" “If you tell the truth, you don't have to remember anything.” ");
        document.getElementById("author").innerHTML = (" -- Mark Twain -- ");
    }

    else if (roll < 0.55){
        document.getElementById("quote").innerHTML = (" “A friend is someone who knows all about you and still loves you.” ");
        document.getElementById("author").innerHTML = (" -- Elbert Hubbard -- ");
    }

    else if (roll < 0.60){
        document.getElementById("quote").innerHTML = (" “To live is the rarest thing in the world. Most people exist, that is all.” ");
        document.getElementById("author").innerHTML = (" -- Oscar Wilde -- ");
    }

    else if (roll < 0.65){
        document.getElementById("quote").innerHTML = (" “Always forgive your enemies; nothing annoys them so much.” ");
        document.getElementById("author").innerHTML = (" -- Oscar Wilde -- ");
    }

    else if (roll < 0.70){
        document.getElementById("quote").innerHTML = (" “Live as if you were to die tomorrow. Learn as if you were to live forever.” ");
        document.getElementById("author").innerHTML = (" -- Mahatma Gandhi -- ");
    }

    else if (roll < 0.75){
        document.getElementById("quote").innerHTML = (" “We accept the love we think we deserve.” ");
        document.getElementById("author").innerHTML = (" -- Stephen Chbosky -- ");
    }

    else if (roll < 0.80){
        document.getElementById("quote").innerHTML = (" “Without music, life would be a mistake.” ");
        document.getElementById("author").innerHTML = (" -- Friedrich Nietzsche -- ");
    }

    else if (roll < 0.85){
        document.getElementById("quote").innerHTML = (" “It does not do to dwell on dreams and forget to live.” ");
        document.getElementById("author").innerHTML = (" -- J.K. Rowling -- ");
    }

    else if (roll < 0.90){
        document.getElementById("quote").innerHTML = (" “Good friends, good books, and a sleepy conscience: this is the ideal life.” ");
        document.getElementById("author").innerHTML = (" -- Mark Twain -- ");
    }

    else if (roll < 0.95){
        document.getElementById("quote").innerHTML = (" “As he read, I fell in love the way you fall asleep: slowly, and then all at once.” ");
        document.getElementById("author").innerHTML = (" -- John Green -- ");
    }

    else{
        document.getElementById("quote").innerHTML = (" “We are all in the gutter, but some of us are looking at the stars.” ");
        document.getElementById("author").innerHTML = (" -- Oscar Wilde -- ");
    }
}
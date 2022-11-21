let counter = 0;
let gamerule = document.getElementById("game");
let factbutton = document.getElementById("know-more");
let asideinfo = document.getElementById("random-fact");

function win(counter) {
    if (counter === 4) {
        swal({
            title: "Cool, thank you!",
            text: "By the way, you look gorgeous today :)",
            button: "Ok",
          });
        gamerule.innerHTML = "You can press the button to know me better.";
        factbutton.style.display = 'flex';
        gamerule.style.margin = '0 auto';
    }
}

let jssource = document.getElementById("js-source");
let jstarget = document.getElementById("js-target");
jssource.addEventListener('dblclick', function() {
    jssource.style.display = 'none';
    jstarget.style.opacity = 1;
    counter += 1;
    win(counter);
})

let csssource = document.getElementById("css-source");
let csstarget = document.getElementById("css-target");
csssource.addEventListener('dblclick', function() {
    csssource.style.display = 'none';
    csstarget.style.opacity = 1;
    counter += 1;
    win(counter);
})

let htmlsource = document.getElementById("html-source");
let htmltarget = document.getElementById("html-target");
htmlsource.addEventListener('dblclick', function() {
    htmlsource.style.display = 'none';
    htmltarget.style.opacity = 1;
    counter += 1;
    win(counter);
})


let wpsource = document.getElementById("wp-source");
let wptarget = document.getElementById("wp-target");
wpsource.addEventListener('dblclick', function() {
    wpsource.style.display = 'none';
    wptarget.style.opacity = 1;
    counter += 1;
    win(counter);
})


let facts = ['In 2017 I dropped out of Czech Technical Uni because thought coding is too difficult for me and never even thought about it till 2022.', 'A dog person. Although, a cat person. Or a horse person (no, that is Bo-Jack). Anyway, love animals!', 'Besides coding, I am deep into power yoga and painting.', 'Practice coding works as an antidepressant. Do this everyday since started in September 2022.', 'I love to travel, but consider my room as the best place in the universe. Being home or being alone can be really fun.', 'If all other food besides baked potatoes dissapears, I\'d not be dissapointed.']

function fact() {
    let factsCount = facts.length;
    let factIndex = Math.floor(Math.random() * factsCount);
    return facts[factIndex];
}


factbutton.addEventListener('click', function() {
    let getFact = fact();
    asideinfo.innerHTML = getFact;
    gamerule.innerHTML = 'Press again to get another fact.';
    document.getElementById("random-fact-container").style.display = 'flex';
})
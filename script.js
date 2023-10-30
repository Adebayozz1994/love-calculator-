const check = ()=>{
    let one = first.value
    let two = second.value

if(one =="" && two==""){
    showErr.innerHTML=`<p class="text-bg-dark fs-5">Please Enter Your Name</p>`
}

else{
    let rando = Math.random()*100
    let live = Math.round(rando);
    first.value = ""
    second.value = ""
    showErr.innerHTML= ""
    display.innerHTML = `<h1 class="text-bg-danger">Love score for ${one} and ${two}:  =❤ ${live}%❤</h1>`
    if (live >= 0 && live < 50) {
        showErr.innerHTML= ""
        age.innerHTML=`<h1 class="text-bg-success">Sorry, ${one} and ${two}, not much love here.</h1>`;
    } else {
        showErr.innerHTML= ""
        age.innerHTML=`<h1 class="text-bg-danger">Congratulations, 💖💖💋${one}💖💖💋 and 💖💖💋${two}💖💖💋! Love is in the air!</h1>`;
    }
        
}





}
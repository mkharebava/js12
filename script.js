function randpr(){
    const delay=Math.floor(Math.random()*2000)+1000;
    const oneortwo=Math.floor(Math.random()*2);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(oneortwo==1){
                resolve(`yvelas`)
            } else reject(`ver gadaxvedit`)
        }, delay);
    })
}
randpr()
  .then(r=>console.log(`gilocavt axal wels`, r))
  .catch(e=>console.log(`gilocavt shobas`, e))


function randtime(racename){
    const delay= (Math.random() * 2000)+1000;
    return new Promise (resolve=> setTimeout(() => resolve (`unmindful task ${racename}`), delay));
}
Promise.race([randtime("one"), randtime("two"), randtime("three")])
  .then(r=>console.log(`first was`, r))
  .catch(e=>console.log(e));


  function randt(allname){
    const delay= (Math.random() * 2000)+1000;
    return new Promise (resolve=> setTimeout(() => resolve (`unmindful task ${allname}`), delay));
}
Promise.all([randt("one"), randt("two"), randt("three")])
  .then(r=>{console.log(r)})
  .catch(e=>console.log(e));

  function randprom(){
    const delay=Math.floor(Math.random()*3000)+1000;
    const oneortwo=Math.floor(Math.random()*2);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(oneortwo==1){
                resolve(`dzalian kargi`);
            } else reject(`samwuxarod`);
        }, delay);
    })
}

const promises = [randprom(), randprom(), randprom(), randprom(), randprom()];
let successes = []
let fails = [];
promises.forEach(promise => {
promise
    .then(result => successes.push(result))
    .catch(error => fails.push(error));
});
setTimeout(() => {
    console.log("tqven xart:", successes);
    console.log("tqven ver shegaqebt:", fails);
}, 4000);
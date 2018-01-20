new Promise(resolve => {
    setTimeout(()=>{
        console.log('async setTimeout');
        resolve('success');
    }, 1000);
}).then(value=>{
    console.log(value);
});

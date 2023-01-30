this.onmessage = function () {
    let count = 0;
    for(let i=0;i<10000000000;i++){
        count+=i;
    }

    this.postMessage(count);
}
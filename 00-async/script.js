(function(){
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const result = x + y;
        console.log(`   [@service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] triggering the service`);
        result = addSync(x,y);
        console.log(`[@client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                var result = 100 + 200;
                console.log(`   [@service] returning result`);
                resolveFn(result)
            }, 5000);
        });
        return p;
    }

    function addAsyncClient(x,y){
        console.log(`[@client] triggering the service`)
        var p = addAsync(x,y)
        p.then(function(result){
            console.log(`[@client] result = ${result}`);
        })
    }

    window['addAsyncClient'] = addAsyncClient;

})();
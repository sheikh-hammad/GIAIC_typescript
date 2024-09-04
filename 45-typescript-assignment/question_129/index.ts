const arrAndTradFunc = {
    key: 'value',
    tradFunct: function(){
        console.log(this.key);
    },
    arrFunc: () => {
        console.log(this.key);
    }
}
arrAndTradFunc.tradFunct()
arrAndTradFunc.arrFunc()
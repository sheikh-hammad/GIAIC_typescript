var _this = this;
var arrAndTradFunc = {
    key: 'value',
    tradFunct: function () {
        console.log(this.key);
    },
    arrFunc: function () {
        console.log(_this.key);
    }
};
arrAndTradFunc.tradFunct();
arrAndTradFunc.arrFunc();

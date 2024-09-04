var object = {
    property: 'value',
    getPropert: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    }
};
object.getPropert();

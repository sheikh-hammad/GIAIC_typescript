const objs = {
    width: 12,
    height: 13,
    getProduct: function(){
        return this.width * this.height
    }
}
console.log(objs.getProduct())
const object = {
    property: 'value',
    getPropert: function () {
        console.log(this.property)
        const innerMethod = () => {
            console.log(this.property)
        }
        innerMethod()

    }
}
object.getPropert();
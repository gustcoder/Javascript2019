const MyFunction = param => console.log(`Param foi: ${param}`)
MyFunction('oioioi')

const MyBlock = (interval) => {
    this.block = 0
    if (interval > 10) {
        this.block += interval
        console.log(typeof(this.block))
        console.log(typeof(interval))
        console.log(this.block)
    }
}
MyBlock(15)
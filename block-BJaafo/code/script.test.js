const rewire = require("rewire")
const script = rewire("./script")
const getFullName = script.__get__("getFullName")
// @ponicode
describe("getFullName", () => {
    test("0", () => {
        let callFunction = () => {
            getFullName("Edmond", -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getFullName("Anas", 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getFullName("Pierre Edouard", "Murray-Kynynmound")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getFullName("George", 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getFullName("Anas", "Dupont")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getFullName(NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

const chai = require('chai')
const expect = chai.expect
const controller = require('../../src/controller/character.controller')

describe('Character controller', () => {
    it('Call soma with 10 and 5 parameters, should return 15', ()=>{
        const result = controller.soma(10, 5)
        expect(result).to.be.equal(15)
    })
})
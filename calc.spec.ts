import {add} from "./calc-functions"

describe("calculator tests", ()=>{
    it("Should add 2+2", ()=>{
        const sum= add(2,2);
        expect(sum).toBe(4);
    })
})
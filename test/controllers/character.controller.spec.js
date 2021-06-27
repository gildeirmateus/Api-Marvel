const app  = require('../../src/server')
const request = require('supertest')

const id = '1011121'

/*

Others Ids for test

1009718 
1009243 
1011081

*/

const errorId = 'error'


describe('Character controller', (done) => {

    it('Call function listAll, should return all characters', async()=>{

        const res = await request(app).get("/v1/public/characters")
        expect(res.status).toBe(200);

    })
    it('Call function getCharacter, should return the character with the id = ' + id, async () => {

        const res = await request(app).get("/v1/public/characters/" + id)
        expect(res.status).toBe(200);
    })
    it('Call function listComics, should return the comics of character with the id = ' + id, async () => {

        const res = await request(app).get("/v1/public/characters/" + id + "/comics")
        expect(res.status).toBe(200);
    })
    it('Call function listEvents, should return the events of character with the id = ' + id, async () => {

        const res = await request(app).get("/v1/public/characters/" + id + "/events")
        expect(res.status).toBe(200);
    })
    it('Call function listSeries, should return the series of character with the id = ' + id, async () => {

        const res = await request(app).get("/v1/public/characters/" + id + "/series")
        expect(res.status).toBe(200);
    })
    it('Call function listStories, should return the stories of character with the id = ' + id, async () => {

        const res = await request(app).get("/v1/public/characters/" + id + "/stories")
        expect(res.status).toBe(200);
    })

   
})

//Test on functions error

describe('Status Error Character controller', (done) => {

    it('Call function getCharacter, should return error for the character with the id = ' + errorId, async () => {

        const res = await request(app).get("/v1/public/characters/" + errorId)
        expect(res.status).toBe(404);
    })
    it('Call function listComics, should return error for the comics of character with the id = ' + errorId, async () => {

        const res = await request(app).get("/v1/public/characters/" + errorId + "/comics")
        expect(res.status).toBe(404);
    })
    it('Call function listEvents, should return error for the events of character with the id = ' + errorId, async () => {

        const res = await request(app).get("/v1/public/characters/" + errorId + "/events")
        expect(res.status).toBe(404);
    })
    it('Call function listSeries, should return error for the series of character with the id = ' + id, async () => {

        const res = await request(app).get("/v1/public/characters/" + errorId + "/series")
        expect(res.status).toBe(404);
    })
    it('Call function listStories, should return error for the stories of character with the id = ' + id, async () => {

        const res = await request(app).get("/v1/public/characters/" + errorId + "/stories")
        expect(res.status).toBe(404);
    })

    
      
      

})
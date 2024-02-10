//1. Add cases for the  'on start' and pressing/display
//2. Reset the calculator between tests

import request from "supertest";
const hostUrl = "http://localhost:3000";

describe('API Tests', ()=>{
    beforeEach(async ()=> {
        const response = await request(hostUrl)
        .post("/api/calculator/reset")
        .expect(200);
  
    })

    it('without setting getting 0', async ()=>{
        const response = await request(hostUrl)
          .get("/api/calculator/display")
          .expect(200);
    
        const result = JSON.parse(response.text);
        expect(result.display).toBe('0');
    })

    it('after pressing show the display', async ()=>{
        const body = { key: '5' };
 
        const response1 = await request(hostUrl)
          .post("/api/calculator/press")
          .send(body)
          .expect(200);
    
        
        const response2 = await request(hostUrl)
          .get("/api/calculator/display")
          .expect(200);
    
        const result = JSON.parse(response2.text);
        expect(result.display).toBe('5');
    })

})
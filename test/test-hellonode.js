const expect = require('expect.js');
const assert = require('assert');
const request = require("superagent");

var PORT = process.env['PORT'] || 8089;



describe('test hello node web app', function() {


   before(function(){
	console.log(`before test: PORT=${PORT}`);
    })

    afterEach(function(){
	console.log("after each");
    })

    after(function(){
	console.log("after test");
    })


    it('web app runs', function(done) {
        const server = require('../hello-world-app.js');
        const url  = `http://localhost:${PORT}/`;
   	request.get(url)
   	.then(res => {
      		// res.text, res.body, res.headers, res.status
        	console.log(JSON.stringify(res));
        	expect(res.text).to.be(`Hello World!: PORT=${PORT}`);
        	expect(res.status).to.be(200);
		process.exit(0);
        	done();
   	})
   	.catch(err => {
      		// err.message, err.response
		console.log(err.message);
		console.log(err.response);
		done(err);

   	});
    });

});



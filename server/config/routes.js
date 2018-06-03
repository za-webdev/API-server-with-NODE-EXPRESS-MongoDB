let UserController = require("../controllers/controllers.js");

module.exports =(app)=>{
	app.get("/",UserController.all);
	app.get("/:name",UserController.findByName);
	app.get("/remove/:name/",UserController.destroy);	
	// app.post("/users/:id/update",UserController.update);	
	app.get("/new/:name/",UserController.create);
}

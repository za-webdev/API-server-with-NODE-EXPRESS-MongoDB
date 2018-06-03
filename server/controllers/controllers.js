let User = require("mongoose").model("User");

class UserController{
	all(req,res){
		User.find({},(err,users)=>{
			if(err){
				console.log("Returned error",err);

				res.json({message: "Error", error: err})
			}
			else{
				res.json({message:"Success",users:users});
			}
		})
	}

	create(req,res){
		let user = new User({name:req.params.name});

		user.save((err)=>{
			if(err){
				console.log("Returned error",err);
				res.json({message:"Error",error:err});
			}else{
				res.json({message:"User Successfully Created"});
			}
		})
	}

	findByName(req,res){
		User.findOne({name:req.params.name},(err,user)=>{
			if(err){
				console.log("Returned error",err);
				res.json({message:"Error",error:err})
				
			}else{
				res.json({user});
			}
		});
	}

	destroy(req,res){
		User.remove({name:req.params.name},(err)=>{
			res.json({message:"User has been deleted"});
		});
	}
}

module.exports = new UserController();

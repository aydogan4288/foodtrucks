console.log("inside of foodtrucks.js");

const mongoose = require("mongoose");
const Foodtruck = mongoose.model("Foodtruck");

class Foodtrucks {
    getAll(req, res){
        Foodtruck.find({}, function(err, foodtrucks){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok", "foodtrucks": foodtrucks});
            }
        });
    }

    getId(req, res){
        Foodtruck.findOne({_id: req.params.id}, function(err, foodtruck){
          if(err){
              res.json({"status": "not ok", "errors": err});
          }
          else{
              res.json({"status": "ok", "foodtruck": foodtruck});
          }
        })
    }

    create(req, res){
        let foodtruck = new Foodtruck(req.body);
        foodtruck.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok"});
            }
        });
    }
}

module.exports = new Foodtrucks();

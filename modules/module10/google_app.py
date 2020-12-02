from flask import Flask, render_template
from flask_pymongo import PyMongo
import google_scrape

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/doodle"
mongo = PyMongo(app)

@app.route("/")
def index():
   doodle_info_to_render = mongo.db.doodle_info.find_one()
   return render_template("doodle.html", doodle=doodle_info_to_render)

@app.route("/scrape")
def scrape():
   doodle_info_collection = mongo.db.doodle_info
   doodle_data = google_scrape.scrape()
   doodle_info_collection.update({}, doodle_data, upsert=True)
   return "Scraping Successful!"
  
@app.route("/hello")
def hello():
    return "HELLO"

if __name__ == "__main__":
   app.run()


#export FLASK_APP=app.py
#export FLASK_ENV=development
#flask run
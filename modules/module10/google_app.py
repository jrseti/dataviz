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
   if doodle_info_to_render is None:
    return "Hey! You need to first visit <a href='http://127.0.0.1:5000/scrape'>http://127.0.0.1:5000/scrape</a>"
   return render_template("doodle.html", doodle=doodle_info_to_render)

@app.route("/scrape")
def scrape():
   doodle_info_collection = mongo.db.doodle_info
   doodle_data = google_scrape.scrape()
   doodle_info_collection.update({}, doodle_data, upsert=True)
   return "Scraping Successful! To view the results go to <a href='http://127.0.0.1:5000'>http://127.0.0.1:5000</a>"
  
@app.route("/drop")
def drop():
    mongo.db.doodle_info.drop()
    return "Dropped! You will need to scrape again: <a href='http://127.0.0.1:5000/scrape'>http://127.0.0.1:5000/scrape</a>"

@app.route("/hello")
def hello():
    return "HELLO"

if __name__ == "__main__":
   app.run()


#export FLASK_APP=app.py
#export FLASK_ENV=development
#flask run
from flask import Flask
from flask import render_template
from flask import request
from operator import itemgetter
import json

app = Flask("KnowTime")

class Leaderboard:
    def __init__(self):
        self.scores = []
        self.capacity = 15
        
    def submit_score(self, name, percent):
        self.scores.append((name, percent))
        self.scores = sorted(self.scores, key=itemgetter(1), reverse=True)
        if len(self.scores) > self.capacity:
            self.scores.pop(self.capacity)

leaderboard = Leaderboard()
leaderboard.submit_score("Adam", 0.5)

@app.route("/")
def home():
    return render_template("options.html")

@app.route("/scores", methods=["POST"])
def scores():
    name = request.json["name"]
    score = request.json["score"]
    leaderboard.submit_score(name, score)
    return json.dumps({"scores": leaderboard.scores})

if __name__ == "__main__":
    app.run()

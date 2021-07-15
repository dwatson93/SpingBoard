from flask import Flask, request, render_template
app=Flask(__name__)

@app.route("/")
def main():
    return render_template("mathlib.html")

@app.route("/Story")
def story():
    place = request.args["place"]
    noun = request.args["noun"]
    verb = request.args["verb"]
    adj = request.args["adj"]
    p_noun = request.args["P_noun"]
    return render_template("story.html",place1= place, noun1=noun, verb1=verb, adj1=adj, p_noun1=p_noun)
from flask import Flask, request
app = Flask(__name__)

@app.route("/welcome")
def welcome():
    return "<h1> Welcome </h1>"

@app.route("/welcome/home")
def welcomeHome():
    return "<h1> Welcome Home </h1>"

@app.route("/welcome/Back")
def welcomeBack():
    return "<h1> Welcome Back </h1>"

@app.route("/")
def main():
    return "<h1> Main Page </h1>"
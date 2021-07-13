from flask import Flask, request
app = Flask(__name__)

@app.route("/")
def main():
    return """ 
    <h1> Main Page </h1>
    
    """
    


@app.route("/add")
def add():
    a = request.args["a"]
    b = request.args["b"]
    sum = int(a) + int(b)
    return f"<h1> {a} + {b} = {sum}  </h1>"

@app.route("/mult")
def mult():
    a = request.args["a"]
    b = request.args["b"]
    sum = int(a) * int(b)
    return f"<h1> {a} X {b} = {sum}  </h1>"

@app.route("/div")
def div():
    a = request.args["a"]
    b = request.args["b"]
    sum = int(a) / int(b)
    return f"<h1> {a} / {b} = {sum}  </h1>"
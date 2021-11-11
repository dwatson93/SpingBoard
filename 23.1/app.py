from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///Blog'
app.config['SQLALCHEMY_TRACK_MODIFACTION'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "oops"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

# list all users
@app.route('/')
def user_list():
    u = User.query.all()
    return render_template("user.html", u=u)

# details of user
@app.route('/user/<user_id>')
def user_detail(user_id):
    u = User.query.get_or_404(user_id)
    return render_template("user_details.html", u=u)

# create a new user
@app.route('/user/create')
def create_user():
    return render_template("create_user.html")

# edit user info
@app.route('/user/<user_id>/edit')
def edit_user(user_id):
    u = User.query.get_or_404(user_id)
    return render_template("edit_user.html", u=u)

# post create user
@app.route('/user/create', methods = ["POST"])
def submit_user():
    fname = request.form["Fname"]
    lname = request.form["Lname"]
    img = request.form["Img"]
    u = User(first_name=fname, last_name=lname, image=img)
    db.session.add(u)
    db.session.commit()
    return redirect("/")

# post delete user
@app.route('/user/<user_id>', methods = ["POST"])
def Delete_detail(user_id):
    User.query.filter(User.id == user_id).delete()
    db.session.commit()
    return redirect("/")

# post edit user
@app.route('/user/<user_id>/edit', methods = ["POST"])
def Submit_edit(user_id):
    u = User.query.get_or_404(user_id)
    fname = request.form["Fname"]
    lname = request.form["Lname"]
    img = request.form["Img"]
    u.first_name = fname
    u.last_name = lname
    u.image = img
    db.session.add(u)
    db.session.commit()
    return redirect(f"/user/{u.id}")

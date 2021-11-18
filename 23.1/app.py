from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Post

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///Blog'
app.config['SQLALCHEMY_TRACK_MODIFACTION'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "oops"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

replace = "()[],"
join= ''

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

# make a post
@app.route('/user/<user_id>/post')
def user_post(user_id):
    u = User.query.get_or_404(user_id)
    return render_template("post.html", u=u)

# Post Details
@app.route('/user/<user_id>/post/<post_id>')
def post_detail(post_id, user_id):
    p = Post.query.get_or_404(post_id)
    u = User.query.get_or_404(user_id)
    return render_template("post_details.html", p=p, u=u)

# Edit post
@app.route('/user/<user_id>/post/<post_id>/edit')
def Edit_Post(post_id, user_id):
    p = Post.query.get_or_404(post_id)
    u = User.query.get_or_404(user_id)
    return render_template("edit_post.html", p=p, u=u)

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

# submit post
@app.route('/user/<user_id>/post', methods = ["POST"])
def submit_post(user_id):
    Post_id = user_id
    Title = request.form["Title"]
    Content = request.form["Content"]
    p = Post(post_id=int(Post_id), title=Title.upper(), content=Content)
    db.session.add(p)
    db.session.commit()
    return redirect(f"/user/{user_id}")

@app.route('/user/<user_id>/post/<post_id>', methods =["POST"])
def Delete_post(post_id,user_id):
    u = User.query.get_or_404(user_id)
    p = Post.query.get_or_404(post_id)
    p.post_id = None
    db.session.add(p)
    db.session.commit()
    return redirect(f"/user/{u.id}")

# edit post post
@app.route('/user/<user_id>/post/<post_id>/edit', methods =["POST"])
def P_Edit_post(post_id,user_id):
    u = User.query.get_or_404(user_id)
    p = Post.query.get_or_404(post_id)
    Post_id = user_id
    Title = request.form["Title"]
    Content = request.form["Content"]
    p.title = Title.upper()
    p.content = Content
    db.session.add(p)
    db.session.commit()
    return redirect(f"/user/{u.id}/post/{p.id}")




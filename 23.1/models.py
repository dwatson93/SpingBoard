from flask_sqlalchemy import SQLAlchemy

# creates a db instance
db = SQLAlchemy()

# connects to db
def connect_db(app):
    db.app = app
    db.init_app(app)

# create db named User
class User(db.Model):

    __tablename__ = "Users"

    def __repr__(self):
        u = self
        return f"id:{u.id}, first name:{u.first_name}, last name:{u.last_name}, image:{u.image}"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(15), nullable=False)
    last_name = db.Column(db.String(15), nullable=False)
    image = db.Column(db.String, nullable=False)
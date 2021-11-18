from models import db, connect_db, User, Post
from app import app

db.drop_all()
db.create_all()

u1 = User(first_name="Naruto", last_name= "Uzumaki", image="https://www.anime-planet.com/images/characters/thumbs/87.jpg?t=1545800455")
u2 = User(first_name="Sasuke", last_name= "Uchiha", image="https://www.anime-planet.com/images/characters/thumbs/531.jpg?t=1429317948")
u3 = User(first_name="Monkey D.", last_name= "Luffy", image="https://www.anime-planet.com/images/characters/thumbs/74.jpg?t=1549566613")
u4 = User(first_name="Zoro", last_name= "Roronoa", image="https://www.anime-planet.com/images/characters/thumbs/75.jpg?t=1551804980")
u5 = User(first_name="Goku", last_name= "Son", image="https://www.anime-planet.com/images/characters/thumbs/2146.jpg?t=1560452001")
u6 = User(first_name="Prince", last_name= "Vegeta", image="https://www.anime-planet.com/images/characters/thumbs/2186.jpg?t=1560977593")

db.session.add_all([u1,u2,u3,u4,u5,u6])
db.session.commit()
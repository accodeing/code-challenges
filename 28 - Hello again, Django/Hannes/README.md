# Hello again, Django
Remember to run this application with Python 3.

`python3 manage.py runserver`

Note: When going through the tutorial, I did not manage to get the "Add field question to choice" part to work when running the migrations, but apparently it works anyway. I guess that depends on me running on SQLite and the tutorial runs PostgreSQL... Quite frustrating, because I misspelled `q.choice_set.all()` and wrote `q.choices_set.all()` which gave me an error message saying that no such method was available. So I thought I had faild creating a proper association, which I had not.

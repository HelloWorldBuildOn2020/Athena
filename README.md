# Athena
---
Hackathon build on Thailand 2020 -- Opendurian -- HelloWorld Team.

### How to start project ?

#### Start by Docker-compose
1. Start all services
```bash
$ docker-compose up
```

------
#### Manual Start
##### Back-end

1. Start MariaDB database via docker-compose
```bash
docker-compose up -d db
```

2. Change environment
```bash
pipenv shell
```
3. Copy env example
```bash
cd back-end
cp env.example .env
```
> Don't forget update env variables

4. Install dependency in requirements.txt
```bash
cd back-end
pip install -r requirements.txt
```

> Note
  For the first time run `python manage.py makemigrations` and `python manage.py migrate`

5. Start server
```bash
cd athena
python manage.py runserver
```

4. Type http://localhost:8000 in your browser and press Enter


###### Front-end

1. Change work directory.
```bash
cd front-end
```

1. Copy .env.example to .env
2. Please, Check value of `REACT_APP_API`, It should be path of api.

> Note
  For the first time run `yarn install` or `npm install`

3. Start Project
```bash
yarn start
```

Enjoy your work ✌ -- By HelloWorld Team.

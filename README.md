# Athena
---
Hackathon build on Thailand 2020 -- Opendurian -- HelloWorld Team.

### How to start project ?
##### Start by docker
> First time: Build docker image
  >>Back-end
  `
  cd back-end
  `
  `
  docker build  -t <your-image-name> .
  `
  >>Front-end
  `
  cd front-end
  `
  `
  docker build -t athena-front-end-app:latest .
  `

In your root (./Athena/.) of directory
```bash
docker-compose up
```

-----
##### Manual Start
###### Back-end
1. Change environment
```bash
pipenv shell
```

2. Install dependency in requirements.txt
```bash
cd back-end
pip install -r requirements.txt
```

> Note
  For the first time run `python manage.py makemigrations` and `python manage.py migrate`


3. Start server
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
FROM python:3.7

RUN apt-get update -y \
    && apt-get install netcat libzbar0 -y \
    && pip install uWSGI==2.0.19.1 \
        Django==3.0.8 \
        django-filter==2.2.0 \
        djangorestframework==3.11.0

ENV APPLICATION_ROOT /app/

RUN mkdir -p $APPLICATION_ROOT

COPY ./requirements.txt $APPLICATION_ROOT/requirements.txt
COPY ./docker/django/entrypoint.sh /entrypoint.sh
COPY ./docker/django/uwsgi.ini $APPLICATION_ROOT/uwsgi.ini
RUN chmod +x /entrypoint.sh

WORKDIR $APPLICATION_ROOT

RUN pip install -r requirements.txt

COPY . $APPLICATION_ROOT
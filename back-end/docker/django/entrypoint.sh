#!/bin/bash
CHECK_MARIADB_COMMAND='nc -z -v db 3306'
$CHECK_MARIADB_COMMAND

while [[ $? != 0 ]]; do
    sleep 2s
    $CHECK_MARIADB_COMMAND
done

cd $APPLICATION_ROOT\athena

python manage.py makemigrations --noinput
python manage.py migrate --noinput
python manage.py collectstatic --noinput

uwsgi --ini $APPLICATION_ROOT\uwsgi.ini
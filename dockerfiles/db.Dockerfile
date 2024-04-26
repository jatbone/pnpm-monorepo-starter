FROM postgres:16
COPY ./dockerfiles/init.sql /docker-entrypoint-initdb.d/

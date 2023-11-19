FROM postgres

ENV POSTGRES_DB=signup 
# COPY ./signup.sql /docker-entrypoint-initdb.d/

EXPOSE 3306




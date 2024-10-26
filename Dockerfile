FROM gliderlabs/herokuish:latest

COPY . /app

RUN /bin/herokuish buildpack build

ENV PORT 3000

EXPOSE 3000

WORKDIR /app

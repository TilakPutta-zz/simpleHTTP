# Implementing HTTP protocol using TCP network library

A TCP network library 'net' in nodejs is used to implement HTTP protocol.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
1. node
```

## Running the tests

Run application using below command

```
PORT=3104 node app.js
```

By executing above command, server will be up and listening. Below listed endpoints will be working:

```
1.  GET     /
2.  GET     /health
3.  PUT     /job
4.  GET     /job/<id>
5.  DELETE  /job/<id>
6.  POST    /job/<id>/<name>
```

## Authors

[**TilakPutta**](https://github.com/TilakPutta)

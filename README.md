
# POC CQRS WITH NESTJS 

## Links
- This poc has been built starting from [this working example](https://github.com/Nytyr/nest-cqrs-eventsourcing-example)
- This poc has been built on top of [Nestjs Event Sourcing Module](https://github.com/ArkerLabs/event-sourcing-nestjs) that help to manage the complexity of MongoDB integration as Event Store

## Note
- Nestjs CQRS module enable Event Store integration only with EventStoreDB and MongoDB. Custom implementation are needed for other database integrations

## Dependencies

- MongoDB instance is needed to be used as Event Store
```
$ docker run -d --name some-mongo -p 27017:27017 mongo
```

## Installation

```
$ npm install
```

## Start

```
$ npm run start
```

## nestjs kafka api's setup

A constellation of 3 nestjs api's connected via kafka broker. No DB is used but in-memory array of users. All 3 are :-

- [billing](https://github.com/codeForMobile/nestjs-kafka-billing)

  To charge customer for the expenses

  #### event listener

  `order_created` listens to event triggered in gateway service.
  Also it subscribes to `auth` service to send/recieve message on `get_user` pattern.

- [gateway](https://github.com/codeForMobile/nestjs-kafka-gateway)

  To provide functionality to users for different ops.
  Customer facing api's.

  #### api's

  `crateOrder` accepts `userID` and `price`

- [auth](https://github.com/codeForMobile/nestjs-kafka-auth)

  To authenticate users.
  Uses message pattern to provide/receive messages.

### How to run

use your favourite pkg manager to install deps in each of above repositories.
`npm run start:dev` in each of services to spin up them. Now api-gateway starts listening on port `3000` for route `createOrder`

### usage

Can be used for a starter template for more complex setup and further addition of
functionality.

### Tooling

- Used [offsetexplorer](https://www.kafkatool.com/download.html)
  for visualizing topics/messages.
  All thanks and credits go to them for wonderful work.

- kafkajs

# Nef-backend
## How to start

```cp .env_example .env```

Update the value for the .env file accordingly

``npm i``

``npm run start``

## How to run the Tests

``npm run test``

## How to get Deterministic Nefturian for wallet address with equal distributions

To solve this I basically put the wallet address through a sha256 hash function and retrieve the last 4 hexa number, parse them into an int and use the mod operation to get a result between 1 et 1240.

I also add a secret salt number to the hash result to be a bit more random. More advanced computation could be done if we want the result to be less predictable.

## Context

The project is divided into repositories, each grouped by functionality.

routes.ts > This file contains all the routes related to the functionality.

controller.ts > This file contains all the logic.

joi.ts > Contain the validation object used in the routes

model.ts > Contains the Typescript model.

clients > The 'clients' folder represents the integration of the NFT into the project.
At this stage, it is a NodeDB, but when switching to smart contract/blockchain storage, only a new client will be necessary.




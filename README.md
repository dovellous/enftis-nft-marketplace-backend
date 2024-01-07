# ENFTIS FRONTEND

ENFTIS is an NFT marketplace that connects the worlds of collectibles, art and gaming. ENFTIS allows you to buy, sell, and create energy non-fungible tokens (eNFTs), which are digital representations of various assets. eNFTs are not only unique and collectible, but also functional and valuable. 

You can use eNFTs to power your own devices, trade them with other users, or donate them to communities in need. ENFTIS is powered by the Jouel Network, a decentralized platform that enables peer-to-peer energy transactions using blockchain technology and smart contracts. By joining ENFTIS, you become part of a global community of energy enthusiasts, artists, and innovators who are shaping the future of green energy and digital art. 

ENFTIS is more than just an NFT marketplace. It is a revolution in the way we create, consume, and share energy. Join ENFTIS today and discover the power of eNFTs.

# TECHNOLOGY STACK

The backend technology is composed of several components that work together to provide a robust and scalable platform for the NFT marketplace. The main components are:

*   **IPFS system via NFTStorage site**: This is a service that allows the storage and retrieval of off-chain NFT data, such as metadata, images, and other assets, using the InterPlanetary File System (IPFS) and the Filecoin network. IPFS is a peer-to-peer network that enables content-addressed and distributed storage of data, while Filecoin is a decentralized storage network that provides long-term and verifiable storage of data. By using this service, the NFT marketplace can ensure the immutability, availability, and performance of the NFT data, as well as reduce the storage costs and complexity.
*   **API gateway for transaction and activity history**: This is a service that exposes a unified and secure interface for the frontend applications to access the backend services and data. The API gateway handles the authentication, authorization, routing, caching, throttling, and logging of the API requests. The API gateway also provides transaction and activity history for the NFT marketplace, which can be used for auditing, analytics, and reporting purposes.
*   **Microservices**: These are small and independent services that perform specific functions and communicate with each other via well-defined APIs. Microservices enable the backend to be modular, scalable, resilient, and easy to maintain and update. Some of the microservices that power the NFT marketplace are:
    *   **NestJS API**: This is a service that implements the business logic and data access layer for the NFT marketplace. It uses NestJS, a progressive Node.js framework that leverages TypeScript and provides a rich set of features and tools for building efficient and scalable server-side applications.
    *   **GraphQL**: This is a service that provides a query language and a runtime for fetching and manipulating data from the backend. GraphQL allows the frontend applications to specify the exact data they need and get it in a structured and predictable way.
    *   **MongoDB**: This is a service that stores and manages the data for the NFT marketplace. MongoDB is a document-based database that offers high performance, availability, and scalability, as well as flexible and expressive data models.
    *   **Data warehouse**: This is a service that collects, transforms, and stores the data from the NFT marketplace for analytical purposes. The data warehouse enables fast and complex queries and insights on the NFT marketplace data, such as trends, patterns, and correlations.
*   **Smart contracts**: These are self-executing contracts that encode the rules and logic for the NFT marketplace. Smart contracts run on the Ethereum blockchain, a distributed ledger that provides transparency, security, and immutability for the transactions and data. The smart contracts are developed with Solidity, a high-level programming language that is designed for writing smart contracts.
*   **Deployment via CICD pipeline**: This is a process that automates the delivery and deployment of the code and the services to the production environment. The CICD pipeline ensures that the code and the services are tested, integrated, and deployed in a consistent and reliable manner, as well as enables continuous feedback and improvement.
*   **Dockerized containers**: These are lightweight and isolated environments that package the code and the dependencies for the services. Dockerized containers allow the services to run on any platform and environment, as well as improve the portability, scalability, and security of the services.


---

# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.js
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

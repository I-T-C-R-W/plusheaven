# plusheaven.eth Dapp
HACK FS 22 - Project

Creators: 
>

>AdedamolaXL • Collaborator  /
>WillDera    • Collaborator  /
>I-T-C-R-W   • Collaborator  /
>Bleyle823   • Collaborator  /
>oleynsve    • Collaborator  /

Proof Of Concept

## The First Modular Betting Platform On Chain

Gambling has always attracted users with its uncertainty. The anticipation of winning gives players the greatest release of the hormone of happiness — dopamine.

Players are attracted by excitement, which generates very strong and unique emotions that allow a person to cheer up and relax. Slot machines perfectly relieve stress and allow you to forget about all the problems and disappointments.

Plusheaven.ETH Dapp is a web3 casino game that allows you to play simply, transparently, safely, and anonymously.

### Our project solves the problems of a centralized online casino:

Like Problems with law restrictions in some countries or missing transparency of the game.

A lot of countries don’t allow gambling. Using the blockchain, you close the risks. Decentralization means that no country can forbid you from spending your money on what you want anywhere. 

Purity and transparency
- All betting information is stored on the smart contract.
- We do not hide the financial situation of our application. 
- Players can make sure that we can pay out winnings for them by looking at our smart contract.
- Also, anyone can view transactions and payments to other players.
- In traditional online casinos, most of the in-game information is hidden from the user.
  Consequently,there the results are not immune from manipulation. 
- We ensure transparency of transactions, winnings, and the course of the game.

Blockchain makes the entire gameplay and algorithms transparent: the contract-actions of the casino are displayed on the blockchain.

Fast transactions & fast money withdrawals
- There are no limits! 
- No Interest! We do not collect any interest for the withdrawal of funds (you can verify by looking at the smart contract)

Easy to use
- No need to pass a verification process or submit any documents!

### The technologies we used:

Web3.Storage (IPFS/Filecoin)
We use web3.storage to store (on IPFS) and retrieve user bets as JSON files during and after each bet round.

Firebase's Firestore
CIDs (Content Identifies ) for each bet upload to IPFS is stored on Firestore in order to fetch the bets when needed.

Polygon - TESTNET/MAIN
The PlusHeaven HiLo contract for submission is deployed on Polygon Mumbai testnet, which gives us the ability to run and test our application in a real world environment.

Contracts
The HiLo contract handles deposits which are done when each bet is placed and payouts for instances of a user winning a bet.

DApp
The frontend is built with ethers.js, and Next.js.
The backend is built on Next.js server-side and Firesbase's firestore

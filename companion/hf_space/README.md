---
title: Online Marketplace Reputation Game
emoji: 🛒
colorFrom: blue
colorTo: green
sdk: static
app_file: index.html
pinned: false
---

# Online Marketplace Reputation Game

An interactive computational economics game exploring how different amounts of seller reputation information affect buyer bidding decisions.

## Research Question

How much reputation information is enough to support successful cooperation between unfamiliar users on an online marketplace?

## Game Design

The game contains three rounds. In each round, the player receives a new $100 budget and evaluates a different seller under three information conditions:

- No History
- Recent History
- Full History

The player must submit a maximum bid for all three conditions before any transaction result is revealed.

The seller's asking price is hidden during the decision stage and is identical across the three information conditions within each round.

## Information Conditions

### No History

No information about the seller's previous transactions is provided.

### Recent History

The player sees a short summary of the seller's recent transactions:

- Successful transactions
- Failed transactions

### Full History

The player sees a summary of the seller's complete transaction history.

Full History contains substantially more observations than Recent History.

## Transaction Rule

A transaction occurs when:

`Player Bid >= Seller Asking Price`

Buyer surplus is:

`True Product Value - Player Bid`

when a transaction occurs.

The seller's asking price is hidden until all three bids have been locked in.

## Game Outputs

After three rounds, the game reports:

- Average bid
- Trade rate
- Average surplus

for each information condition.

## Technical Implementation

This Space uses:

- HTML
- CSS
- Client-side JavaScript

It does not use:

- Python
- Backend servers
- Databases
- External APIs
- API keys
- Secrets
- CPU/GPU runtimes
- Paid services

All calculations occur locally in the user's browser.

## Overview
**Cypress** is a great E2E testing tool. Here are a few great reasons to consider it:

- Isolated installation possible.
- Ships with TypeScript support out of the box (This means code completion and docs with VS Code)
- Provides a nice interactive google chrome debug experience. This is very similar to how UI devs mostly work manually.
- Has command - execution separation which allows for more powerful debugging and test stability 
- Has implicit assertions to provide more meaningful debug experience with less brittle tests
- Provides the ability to mock out and observe backend XHRs easily without changing your application code

Here is a [demo video](https://youtu.be/ZGEeve8MQiE) (7 minutes) showing basic cypress testing with google search verifying if search word is an adjactive. The github repository is [here]().

It also supports many browsers like **Microsoft Edge**, **Firefox** and **Chrome** but not **Safari**

## Unsupported Browsers and Caveats
Many browsers such as Safari and Internet Explorer are not currently supported. Support for more browsers is on our roadmap. You can read an explanation about our future cross browser roadmap [here](https://github.com/cypress-io/cypress/issues/310). Also there can be no nested iframes or seperate browser tabs. You can see limitations and trade-offs [here](https://docs.cypress.io/guides/references/trade-offs.html#Permanent-trade-offs-1).

## Installation
Installation is well explained [here](https://basarat.gitbook.io/typescript/intro-1/cypress#installation), along with a youtube tutorial found within basarat's youtube channel with a video entitled [Quickly get started with Cypress E2E testing using TypeScript](https://www.youtube.com/watch?v=n3SvvZSWwfM)
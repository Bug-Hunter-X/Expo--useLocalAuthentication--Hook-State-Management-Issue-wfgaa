# Expo `useLocalAuthentication` Hook State Management Issue

This repository demonstrates a bug in Expo's `useLocalAuthentication` hook where the state doesn't reliably reset after failed or canceled authentication attempts.  This leads to subsequent authentication failures without clear error feedback to the user.

The `bug.js` file showcases the problematic behavior.  The `bugSolution.js` file provides a solution to handle state management correctly.

## Bug Reproduction
1. Clone the repository.
2. Run `npm install` or `yarn install`.
3. Run the app. Notice how failed or canceled authentication does not properly reset the state. 

## Solution
The provided solution (`bugSolution.js`) introduces explicit state management using a custom state variable and cleanup functions to ensure the hook's state is properly reset after each authentication attempt.
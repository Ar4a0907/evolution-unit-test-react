# How to complete the homework

Your task is to go through all the tests in `src/__tests__` folder and make them pass.

- You can find files to test in `src` folder
- You can find tests in `src/__tests__` folder
- Tests are ordered by difficulty from 01 to 05 but you can complete them in any order
- Components to cover is here: `src/components/OurComponent.tsx` and `src/components/ReduxExample.tsx`
- You can launch react app with `npm start` or `yarn start` and see the components in browser

## How to run tests

1. `npm install` or `yarn install` to install dependencies
2. To run tests you can use `npm test` or `yarn test` to run tests only once
3. Use `npm test -- --watch`, or `npm run test:watch`, or `yarn test --watch`, or `yarn test:watch` to run tests in watch mode
4. Uncomment comments in `OurComponent` and `ReduxExample` to import the libs you need

- If you would like to see coverage then run `npm test -- --coverage`
  - It should generate html report in `/coverage` dir
  - you can use `npx http-server ./coverage -c-1 -o` to serve it and see HTML report in browser


## Hints

<details>
<summary>Testing Redux Actions</summary>

Almost everything is spelled out, but you can use `const state = store.getState();` to get the state of the store and check if it's changed after the action is dispatched.

</details>
## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Submit Solution` link on <a href="https://app.codescreen.com/candidate/56fd9a61-8c5b-4983-9088-8165776d174e" target="_blank">this screen</a>.
# Tasks application FE/BE 
### (It was said that this task should take approximately one hour)

## Start developing

Create `.env` file

```sh
cp .env.example .env
```

Install project dependencies

```sh
yarn install
```

Start dev server

```sh
yarn dev
```


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app for prod


# Feedback

It seems that the junior was left completely without care.

###The summary:
1. Your task is not to set up the environment, the starter should be provided by your senior colleagues.
2. Pay attention to your console, it could help a lot. If it says: "114 vulnerabilities (12 low, 62 moderate, 33 high, 7 critical)" it's a sign,
   that something is not OK.
3. Confirm the libraries' versions. React class components go to a well-deserved rest giving way to functional components.
4. Try to divide the task into smaller ones. In this way, you can achieve that you need to focus on smaller tasks, get feedback earlier, and do incremental delivery. In this way, you can avoid the situation when you need to change the implementation and rewrite everything.
5. Try to understand the requirements. It was no information, that you need to group tasks by status.
6. The main rule of React state - it shouldn't be mutated. The "forceUpdate" in 98% of cases means that something is wrong.
7. There should be one "source of the truth". But your Tasks component is ignoring it. It takes tasks from the parent component, set the data to the state, modifies it, and forgets, that its parent component is responsible for the data (single source of the truth), and the child component should be only responsible for displaying it. If there is a need for modifications, it should be done via provided services/callbacks.
8. Don't mix various strategies into one place. The same comes with the styling strategies: styled-components are mixed with simple CSS". It could lead to styling conflicts.
9. Don't forget about the single responsibility principle. You can always split the code according to the responsibilities. Right now your one component tries "to take" everything.
10. Naming: names should be clear and representative. It's hard to understand what the component "Done" is.
11. It's possible to simplify the code: the constructors are not required by default. The state could be created without a constructor. Also, the arrow functions could help get rid of "binding this".
12. Task's task state: right now the simple flag represents whether it's "completed" or not. What will be if there are more states or substates? It's better to use enumeration values as states: "completed", "new".
13. Lists and keys: https://reactjs.org/docs/lists-and-keys.html.
14. Code format: there are tools that help with code format like eslint, prettier.
15. Typescript, esling could help avoid bugs during the development process.
16. Tests come as code "security" but also could be used as the tool that helps write the code, find the bugs, and formalize the responsibilities and expectations.
17. Project structure: https://reactjs.org/docs/faq-structure.html.
18. Id/codes should be used to identify the object. 
19. package.lock or yarn.lock file should be also committed as it helps to ensure having the same minor versions installed.


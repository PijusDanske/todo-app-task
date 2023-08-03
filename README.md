Review:

- First of all, you should create a `.gitignore` file; it is an essential part of version control with Git. Git automatically starts tracking all the files in the directory and its subdirectories. However, there are certain files and directories that you typically don't want to include in version control for various reasons, such as:
  - Sensitive information: You might have configuration files or credentials containing sensitive data like API keys, passwords, or private keys (in our case, we will have firebase keys). Including such sensitive information in a version-controlled repository could pose security risks if the repository becomes public or is accessed by unauthorized individuals.
  - Build artifacts: Currently, it looks messy and crowded. You can simply set up auto-formatting to occur when saving the file.
  - IDE or editor-specific files: These should not be included as well.
- **Format the code**. Currently it looks messy and crowded. Yo can simply setup auto-formatting on saving the file.
- Write meaningful **title** and **description** in the `package.json` file
- Styling: You wrote some styling in the `styles.css file`, and here I have some comments:
  - Unused code:
    ```sh
    App {
      margin: 16px;
      font-family: sans-serif;
      text-align: center;
    }
    ```
    The code is not used since there is no default HTML element called `App`. Change `App` to `.App` to make it a class, and then add the App class to the app component.
  - You are using both custom CSS in `styles.css` and styled-components. I would recommend going with one of them while styling components to avoid bugs. The styling in `styles.css` should only include styles used globally.
- Upgrade package versions to the latest stable ones in the `package.json` file. Use the Caret `^` Symbol when specifying package versions. The caret symbol specifies a version range that allows updates to the latest compatible version of the specified package while keeping the same major version. Update from:
  ```sh
   "react": "0.14.8",
    "react-dom": "0.14.8",
    "react-scripts": "1.1.4",
    "styled-components": "3.3.3"
  ```
  to:
  ```sh
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "^5.0.1",
    "styled-components": "^6.0.6"
  ```
- Improve the project structure. Currently, all the code is written in `index.js`. Consider the following structure:
  - `Index.js` - This file should only handle the setup and rendering of the application's root component.
  - `App.js` - This file should typically contain the main/root component of your application.
  - `Components/Home.js` - You can use this to store home page components.
  - `Components/Tasks.js` Use this file to describe tasks.
- Rewrite the Tasks component from a class component to a functional component
  ```sh
  class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.tasks.filter(task => !task.done),
      completed: this.props.tasks.filter(task => task.done),
      total: this.props.tasks.length
    };
    this.addTask = this.addTask.bind(this);
  }
  ```
  to
  ```sh
  export function Tasks({ allTasks }) {
    const [tasks, setTasks] = useState(allTasks);
  // ...
  ```
  This has many benefits:
  - Functional components are generally shorter and easier to read compared to class components. With destructured props, you directly access the required props without using this.props inside the component.
  - In a functional component, you don't need to define a constructor or use this.state. Instead, you can directly access the props as function arguments.
  - Functional components avoid the use of this, which can sometimes lead to confusion and bugs in class components.
  - Functional components are more performant than class components, especially when used in conjunction with React hooks like useState and useEffect.
- Check for Errors and Warnings in the Console. Observe both the Terminal in your IDE and the Console in the Browser to fix errors and warnings:
  - `Warning: Each child in a list should have a unique "key" prop.` - each task should have a "key". Change from this `{this.state.active.map((task) => {<Active` to this `{this.state.active.map((task, index) => {<Active key={index}`
  - `Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead.`
  - `Manifest: Line: 4, column: 1, Syntax error.` - missing manifest file in /public directory
- Naming variables
  - Task status named `done` should be changed to `active` to maintain consistency in naming.
  - The variable `someTasks` should be renamed. I understand it's probably for debugging, but it's better to name variables correctly from the very beginning.
- Incorrect code
  ```sh
    active: this.props.tasks.filter(task => !task.done),
    completed: this.props.tasks.filter(task => task.done),
  ```
  It should be vice versa since you want to filter active items that have the `done` variable set to true, and the opposite with `completed` tasks list:
  ```sh
   active: this.props.tasks.filter(task => task.done),
   completed: this.props.tasks.filter(task => !task.done),
  ```
- Code that needs changes:
  ```sh
    <Active
      onClick={() => {
        this.setState({ completed: this.state.completed.concat(task) });
      }}
    >
  ```
  Advised improvements:
  - First, avoid defining the function directly inline in the component. The function should be defined separately outside the component and then passed as a prop to the component.
  - The function logic is wrong since it adds the value to the completed list but doesn't remove it from the active tasks list.
- `this.props.tasks.push({ title: "new task", done: false });` can be improved by using more React-friendly approach that follows the principles of immutability. Directly modifying the tasks array in props can lead to unexpected side effects and can cause issues with state management. Instead do this `const newTask = { title: "new task", active: false }; const updatedTasks = [...this.props.tasks, newTask];`

Further recommendations:

- Refactor the list itself and add a feature to re-mark a task to be active (if you accidentally marked it as completed) to prevent human errors.

// @ts-nocheck

/** @INSTALL_SETUP **/

// Create React App
// $ npx create-react-app my-app

/** @ABOUT REACT **/

/*
- A library, not a framework
    - Not opinionated
    - No required patterns like MVC
- Declarative rather than imperative
    - Declares what the program should accomplish rather than how to accomplish it
    - Declares how the view looks given data --> builds a virtual representation of the view in memory --> handles changes automatically
- Component-based
    - Encapsulation of information
    - Loose-coupling between different components
- No Templates
    - Use JSX markup to create nested DOM elements
- Isomorphic
    - Same code on browser and server
*/

/********** */
/** @PROPS **/
/********** */

// Properties passed to components
// Props should be immutable and shouldn't change during the component's lifecycle
function Foo(props) {
    const {bar} = props;
    return <h1>{bar}</h1>
}
const element = <Foo bar='bar' />

// Using props.children to pass props up to parent
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">Welcome</h1>
            <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
        </FancyBorder>
    );
}
// Another example with multiple props
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">{props.left}</div>
            <div className="SplitPane-right">{props.right}</div>
        </div>
    );
}
function App() {
    return <SplitPane left={<Contacts />} right={<Chat />} />
}

// Pass JSX elements as props
const Confirm = ({
  children,
  onAccept,
  onReject,
  acceptButton = <Button>Ok</Button>,
  rejectButton = <Button>Cancel</Button>,
}) => (
  <div className="confirm">
    <div className="confirm-header">
      <h1>Confirm</h1>
    </div>
    <div className="confirm-content">{children}</div>
    <div className="confirm-footer">
      {React.cloneElement(acceptButton, { className: "accept-btn", onClick: onAccept })}
      {React.cloneElement(rejectButton, { className: "reject-btn", onClick: onReject })}
    </div>
  </div>
)
<Confirm
  acceptButton={<Button>Yep</Button>}
  rejectButton={<Button>Nope</Button>}
  onAccept={() => {}}
  onReject={() => {}}
>
  You sure?
</Confirm>

// Access props of elements passed as prop
const Fooify = ({ link }) => <a href={link.props.href}>Foo-{link.props.children}</a>
const App = () => <Fooify link={<a href="/bar">Bar</a>}>Bar</Fooify>

// Pass params using data-attributes
function Letters({ letters, handleClick }) {
    return (
        <>
            {letters.map(letter => (
                <div key={letter} data-letter={letter} onClick={handleClick}>{letter}</div>
            ))}
        </>
    )
}
function App() {
    const letters = ['A', 'B', 'C']
    const handleClick = (event) => console.log(`You just clicked ${event.target.dataset.letter}`)
    return <Letters letters={letters} handleClick={handleClick} />
}

// Higher order components: Enhance "lower" components using props
function Description({ children }) {
    return <span>{children}</span>
}
function embolden(Component) {
    return <strong><Component /></strong>
}
const EmboldenedDescription = embolden(Description);
function App() {
    return (
        <>
            <h1>My App</h1>
            <EmboldenedDescription>
                Sint ut anim aliqua voluptate ut veniam nisi laboris proident dolor ipsum.
            </EmboldenedDescription>
        </>
    )
}

// Query data in a higher-order component, then send as a prop
const Title = ({ title, remoteTitle }) => <h1>{title}{remoteTitle}</h1>
function enhanceComponent(Component) {
    const [remoteTitle, setRemoteTitle] = React.useState(null)
    React.useEffect(() => {
        vaguelyFetchData().then(data => setRemoteTitle(data))
    }, [])
    return (props) => <Component remoteTitle={remoteTitle} {...props} />
}
const EnhancedTitle = enhanceComponent(Title)

// Pass a `key` to indicate the component is unique: No shared state with another component
function ProfilePage({userId}) {
    return <Profile userId={userId} key={userId} />
}
function Profile({userId}) {
    // This state will be cleared and reset when the `key` changes -- no overlapping state
    const [comment, setComment] = useState('')
    return <b>{comment}</b>
}
// 

/********** */
/** @STATE **/
/********** */

// Pure function components are fine!
// Example: sum() doesn't modify props and same input always returns same results
function sum(a, b) {
    return a + b;
}
// Impure functions that modify props should utilize React states
// Example: Impure function
function withdraw(account, amount) {
    account.total -= amount;
}
// Example: refactored with state
function Account({ initialAmount }) {
    const [accountTotal, setTransaction] = useState(initialAmount);
    function withdraw(amount) {
        setTransaction(accountTotal -= amount);
    }
    function deposit(amount) {
        setTransaction(accountTotal += amount);
    }
    return (
        <>
            <p>Account value: <b>${accountTotal}</b></p>
            <button type="button" onClick={() => withdraw(5)}>Withdraw $5</button>
            <button type="button" onClick={() => deposit(5)}>Deposit $5</button>
        </>
    )
}
const element = <Account initialAmount="100" />;

// When something can be calculated from existing props or state, don't put it
// in state or effect; Put it in the rendering phase of the component lifecycle
function Component() {
    const [firstName, setFirst] = useState('Gustavo')
    const [lastName, setLast] = useState('Almodovar')
    const fullName = firstName+' '+lastName
    return <>{fullName}</>
}

// Use browser form to set props
// The following form result is: /search?q=FOO&showAllResults=false

<form action="/search" method="GET"> 
    <input name="q" type="search" placeholder="Search for blog posts" />
    <label>
        Show all results?
        <input name="showAllResults" type="checkbox" defaultValue={false} />
    </label>
    <button type="submit">
    Search
    </button>
</form>

// ** State updates are asynchronous ***
// React may batch multiple setState() calls into a single update for performance.

// State updates should be done within side effects
React.useEffect(() => {
    setState('new value')
}, [state])

// And functional updates
setState(prevState => ({ ...prevState, ...updatedValues }))

/************/
/** @HOOKS **/
/************/

/**
 * @useState
 * Preserve variables between function calls, beyond function exit. Necessary for variables within components
 * that don't act like pure functions with respect for their props.
 *
 * @param {any} InitialState Takes initial state as argument
 *
 * @returns {array} [currentState, setState]
*/
const [state, setState] = useState(initialState);

// Example with counter
function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    );
}

// Example with local storage data
const [value, setvalue] = React.useState(
    // Preserve search query via useState + local storage
    // local storage side effect
    localStorage.getItem(key) || initialState
)

// Access previous state upon updating state:
setState(prevState => {
    // Object.assign would also work
    return { ...prevState, ...updatedValues };
});

/**
 * @useReducer
 * Alternative to useState. Preferable when complex state logic, or when the next state depends on the previous one
 * Pass dispatch down instead of callbacks
 * @param {Function} reducer Return a new state based on given action (state, action) => newState
 * @param {mixed} initialArg
 * @param {?} init ???
 * @returns {mixed} state Current state
 * @returns {Function} dispatch Dispatch method; Function to call to supply a new state
 */
const [state, dispatch] = useReducer(reducer, initialArg, init);

// Example with a counter
const initialState = {count: 0};
function reducer(state, action) {
    return action.type == 'decrement' ? {count: state.count + 1} : {count: state.count - 1};
}
function Counter() {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <>
            Count: <b>{state.count}</b> 
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}

/**
 * @useEffect
 * 
 * Allows opt-in to component lifecycle: Inform React this component needs to do something after render.
 * Used for Data fetching, setting up a subscription, and manually changing the DOM, etc.
 * 
 * @param {Function} effectFunction Where the side-effect occurs; Called initially and (if dependency variable exists) if dependency variables change
 * @param {Array} DepVars Dependency variables; If one changes, the function is called on re-render; if [] run an effect and clean it up only once (on mount and unmount); if nothing given, call every time
 * 
 * @returns {Function} An optional function to clean up before calling the effect again on the next render
*/
React.useEffect(() => {
    // update locally-stored search term whenever `value` changes
    localStorage.setItem(key, value)
}, [value, key]) // Only re-run the effect if `key` and/or `value` changes

/**
 * @useLayoutEffect
 * 
 * Run effects after layout (geometric measurements) but before repaint; Compared to useEffect
 * which runs effects only after repaint. Useful for measurements or if effects are causing
 * flickers on rerenders.
 */

/**
 * @useRef
 *
 * Creates a mutable reference object that persists throughout the lifetime of the component
 *
 * @param {any} initialValue
 *
 * @returns {Object} `current` property 
 */

// Reference a DOM element to access it imperatively:
function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

// Use a ref to store a value that doesn't require component rerender
// Should be set within event handlers and effects ONLY @see https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables
function LogButtonClicks() {
  const countRef = useRef(0);
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  return <button onClick={handle}>Click me</button>;
}

// Use a ref to manage state
function Stopwatch() {
  const [count, setCount] = useState(0);
  const timerIdRef = useRef(0);
  const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
  };
  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);
  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );

// Hooks that use memoization follow. Memoize components that...
// - are pure
// - render often
// - rerender with the same props
// - are medum/large in size

/**
 * @useCallback
 * 
 * Useful for passing callbacks to optimized child components to prevent unneccesary renders
 * 
 * @param {Function} callback An inline callback
 * @param {Array} dependencies
 * 
 * @returns {Function} Memoized version of the callback, changes when one of the dependencies has changed
 */
const memoizedCallback = useCallback(
    () => {
        doSomething(a, b);
    },
    [dependencyA, dependencyB],
);

// Prevent parent from breaking momoization of children:
// Memoized child:
function BigList({ searchTerm, handleItemClick }) {
    const items = vagueFetch(searchTerm);
    return items.map((item) => <div onClick={handleItemClick}>item.name</div>);
}
const MemoizedBigList = React.useMemo(BigList);
function Parent({ searchTerm }) {
    // By memoizing the callback, it won't change when Parent rerenders, preventing MemoizedBigList from rerendering
    const handleItemClick = React.useCallback((event) => {
        console.log(`You clicked ${event.currentTarget}`);
    }, [searchTerm]);
    return <MemoizedBigList searchTerm={searchTerm} handleItemClick={handleItemClick} />
}

// Memoized callback used with Side Effect
// Invoke a function whenever a variable changes
const handleFetchData = useCallback(() => {
    fetch('/api').then(response => response.json()).then(result => { doSomethingWithData(result); });
}, [dependencyVariable]); // Create a memoized function `handleFetchData` every time dependencyVariable changes, which triggers the effect below
useEffect(() => {
    handleFetchData(); // Invoke the thing
}, [handleFetchData]);

// Callback as reference
// CB function has access to the referenced DOM node
const Simple = () => {
    const ref = useCallback(node => {
        if (node) node.focus() // a side effect!
    }, [])
    return <div ref={ref}>:)</div>
}
// A more complex example:
function ComponentWithRefRead() {
    const [text, setText] = React.useState('Some text ...');
    function handleOnChange(event) {
        setText(event.target.value);
    }
    /** @var node DOM element */
    const ref = React.useCallback((node) => {
        if (!node) return;
        const { width } = node.getBoundingClientRect();
        document.title = `Width:${width}`;
    }, [text]);
    return (
        <div>
            <input type="text" value={text} onChange={handleOnChange} />
            <div>
                <span ref={ref}>{text}</span>
            </div>
        </div>
    );
}

/**
 * @useMemo
 * 
 * Useful for expensive calculations
 * Write your code so that it still works without useMemo — and then add it to optimize performance.
 * 
 * @param {Function} createFunction A function to create the returned memoized value
 * @param {Array} Deps Dependency variables 
 * 
 * @returns {*} A memoized value; Changes when any of `Deps` changes
 */
const memoizedValue = useMemo(() => createFunction(a, b), [a, b]);

// Memoize props when they are (non-primitive) objects/arrays/functions/etc:
function Foo({ bar, baz }) {
    React.useEffect(() => {
        const options = { bar, baz }
        buzz(options)
    }, [bar, baz])
    return <div>foobar</div>
}
function Blub() {
    const bar = React.useCallback(() => { }, []) // Memo prevents Foo side effect from rerunning
    const baz = React.useMemo(() => [1, 2, 3], []) // Memo prevents Foo side effect from rerunning
    return <Foo bar={bar} baz={baz} />
}

/**
 * @see memo
 * Render the component only when props change
 */
const MyComponent = React.memo((props) => {
    /* render using props */
});

/*******************/
/** @CUSTOM_HOOKS **/
/*******************/

/** @useSemiPersistentState
 * Preserve key-value pairs in local storage
 * @param {string} key A key to define this instance so `value` is not overwritten
 * @param {string} initialState Default value for useState()
 */
function useSemiPersistentState(key, initialState) {
    const [value, setvalue] = React.useState(
        localStorage.getItem(key) || initialState
    )

    React.useEffect(() => {
        console.log(`useEffect:${key}`)
        // update locally-stored search term whenever `value` changes
        localStorage.setItem(key, value)
    }, [value, key]) // Only re-run the effect if `key` and/or `value` changes

    return [value, setvalue]
}

/**************/
/** @CONTEXT **/
/**************/

// Create a 'global' prop for a component tree instead of passing props down several levels.
// E.g. current authenticated user, theme, or language.
// **Use when many components in the tree need to use a prop.**
// An alternative is component composition: Padding a whole component down instead of props.

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext(themes.light);
function App() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value,
    // which overrides the default. Without <ThemeContext.Provider>, 
    // child components would receive the default.
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}
// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}
function ThemedButton() {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    const theme = React.useContext(ThemeContext);
    return <button style={{ background: theme.background, color: theme.foreground }}>Button</button>
}

// Pass the state with the method to context provider
export const userDetailsContext = createContext();
const UserDetailsProvider = (props) => {
    const [userDetails, setUserDetails] = useState();
    return (
        <userDetailsContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </userDetailsContext.Provider>
    );
};

export default UserDetailsProvider;

/** Component composition
 * Use of children as alternative to inheritance, prop-drilling, etc */
// Example: Instead of using App as context provider for user object, compose components that use
// children props and pass user object where needed
function App() {
    [user, setUser] = useUser(); // Some hook to fetch user
    const handleLogin = () => setUser({ name: 'Foo' })
    return (
        <Page>
            <Header>
                <Heading />
                <Login>
                    {user ? <UserMenu user={user} /> : <LoginMenu />}
                </Login>
            </Header>
            <Content />
        </Page>
    )
}
const Page = ({ children }) => <html><body>{children}</body></html>
const Header = ({ children }) => <header>{children}</header>
const Heading = () => <h1>Cool Site</h1>
const Login = ({ children }) => <nav>{children}</nav>
const UserMenu = ({ user }) => <>Hello, {user.name}</>
const LoginMenu = () => <button onClick={handleLogin}>Login</button>
const Content = () => <h2>Welcome</h2>

/**************/
/** @STYLING **/
/**************/

import './App.module.css';
// .item {
//     border: 2px solid gray;
//     position: relative; }
//     .item > dl {
//         padding: 1em; }
//         .item > dl + button {
//             position: absolute;
//             top: 1em;
//             right: 1em;
//         }
// .button {
//     background-color: silver;
//     border: 2px solid gray; }
//     .button:hover > svg > g {
//         fill: white;
//         stroke: white;
//     }
// .buttony {
//     font-weight: bold; 
// }
// .button-over {
//     background-color: white;
//     border-color: black;
// }
import cs from 'classnames'; 
import styled from 'styled-components'; // CSS in JS
// Import SVG as React Component
import { ReactComponent as Check } from './check.svg';
import React from 'react';

let StyledDL = styled.dl`
    display: flex;
  `
let StyledDT = styled.dt`
    flex-basis: 25%;
    font-weight: bold;
    text-align: right;
    margin: 0;
    padding: 0 1em 0 0;
  `
let StyledDD = styled.dd`
    flex-basis: 25%;
    margin: 0;
    padding: 0;
    background-color: ${props => props.backgroundColor};
    color: white;
  `
const Element = ({ objectID, title, year_published }) => {
    let buttonClass = cs(button, buttony)
    return (
        <div className={item} style={{ display: 'flex' }}>
            <StyledDL key={objectID} style={{ width: '80%' }}>
                <StyledDT>Title</StyledDT>
                <StyledDD backgroundColor="gray"><a href="/foo.html">{title}</a></StyledDD>
                <StyledDT>Release</StyledDT>
                <StyledDD backgroundColor="black">{year_published}</StyledDD>
            </StyledDL>
            <button type="button" className={buttonClass} style={{ width: '20%' }}>
                <Check height="18px" width="18px" />
            </button>
        </div>
    )
}

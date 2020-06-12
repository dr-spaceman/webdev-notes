/** ABOUT REACT **/
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

/** @PROPS **/

// Properties passed to components
// Props shouldn't change during the component's lifecycle
function Foo(props) {
    const {bar} = props;
    return <h1>{bar}</h1>
}
const element = <Foo bar='bar' />

/** @STATE **/

// Pure function components are fine!
// Example: sum() doesn't modify props and same input always returns same resuls
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
const element = <Account initialAmount="100" />

/** @LISTS_AND_KEYS **/

// Keys should be given to the elements inside the array to give the elements a stable identity
// They should be unique in the array, not globally unique

// Example: Transform an array into a list of elements
const numbers = [1, 2, 3];
const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>);
const list = <ul>{listItems}</ul>

/************/
/** @HOOKS **/
/************/

/** @useState
 * Preserve variables between function calls, beyond function exit
 * Necessary for variables within components that don't act like pure functions with respect for their props
 * @param {mixed} InitialState Takes initial state as argument, then returns two values:
 * @returns {Array} [current state, function to update state and enqueue a re-render of the component]
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
            <button onClick={() => setCount(prevCount => prevCount + 1)}>-</button>
        </>
    );
}

// Example with local storage data
const [value, setvalue] = React.useState(
    // Preserve search query via useState + local storage
    // local storage side effect
    localStorage.getItem(key) || initialState
)

/** @useReducer
 * Alternative to useState. Preferable when complex state logic, or when the next state depends on the previous one
 * Pass dispatch down instead of callbacks
 * @param {Function} reducer (state, action) => newState
 * @param {*} initialArg
 * @returns {Array} Current state; Dispatch method
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

/** @useEffect
 * Allows opt-in to component lifecycle
 * @param function Where the side-effect occurs; Called initially and (if dependency variable exists) if dependency variables change
 * @param array Dependency variables; If one changes, the function is called
*/
React.useEffect(() => {
    console.log('useEffect:searchValue')
    // update locally-stored search term whenever `value` changes
    localStorage.setItem(key, value)
}, [value, key]) // Only re-run the effect if `key` and/or `value` changes

/** @useRef
 * Creates a reference to an element
 * Persists throughout the lifetime of the component
 * @param {?} initialValue
 * @returns {Object} `current` property 
 */
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
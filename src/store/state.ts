/**
 * Definition of application state
 */
export type State = { login: { error: Boolean }};
/**
 * Applications default state
 */
const defaultState: State = { login: { error: false }};

export default defaultState;

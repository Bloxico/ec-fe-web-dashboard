export interface State {
  isOpen: boolean;
}

const initialState: State = () => ({
  isOpen: false,
});

export default initialState;

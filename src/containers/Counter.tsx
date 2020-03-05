import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import CounterControl from '../components/CounterControl/CounterControl'
import CounterOutput from '../components/CounterOutput/CounterOutput'
import { Actions as CounterActions } from '../store/counter/actions'
import { AsyncActions as AuthActions } from '../store/auth/actions'
import { State as CounterState }  from '../store/counter/reducers'
import { AppState } from '../store/store.compose'

interface DispatchProps {
  onAddCounter: () => CounterActions
  onSubtractCounter: () => CounterActions
  onIncreaseCounter: () => CounterActions
  onDeacreaseCounter: () => CounterActions
  onSetToken: () => void
}
interface OwnProps {
  propsFromParent?: string
}

type Props = CounterState & OwnProps & DispatchProps

interface State {
  internalComponentState?: number
}
class Counter extends Component<Props, State> {

  render() {
    return (
      <Fragment>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.onIncreaseCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDeacreaseCounter}  />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
        <button onClick={this.props.onSetToken}> DO ASYNC STUFF</button>
      </Fragment>
    )
  }
}

const mapStateToProps = (state: AppState ): CounterState => {
  return {
    counter: state.counter.counter
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
  return {
    onSetToken: async () => { await dispatch(AuthActions.login('test', 'horst'))},
    onAddCounter: () => dispatch(CounterActions.add(5)),
    onSubtractCounter: () => dispatch(CounterActions.subtract(5)),
    onIncreaseCounter: () => dispatch(CounterActions.increment()),
    onDeacreaseCounter: () => dispatch(CounterActions.decrease())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

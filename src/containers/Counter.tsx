import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import CounterControl from '../components/CounterControl/CounterControl'
import CounterOutput from '../components/Output/CounterOutput'
import { Actions as CounterActions } from '../store/counter/actions'
import { AsyncActions as PostActions } from '../store/posts/actions'
import { State as PostState }  from '../store/posts/reducers'
import { State as CounterState }  from '../store/counter/reducers'
import { State as CommonState }  from '../store/common/reducers'
import { AppState } from '../store/store.compose'
import '../components/CounterControl/CounterControl.css'

interface DispatchProps {
  onAddCounter: () => CounterActions
  onSubtractCounter: () => CounterActions
  onIncreaseCounter: () => CounterActions
  onDeacreaseCounter: () => CounterActions
  onLoadPost: () => void
}
interface OwnProps {
  propsFromParent?: string
}

type StoreState = CounterState & CommonState & PostState

type Props = StoreState & OwnProps & DispatchProps

interface State {
  internalComponentState?: number
}
class Counter extends Component<Props, State> {

  render() {
    return (
      <Fragment>
        <CounterOutput value={this.props.counter} loading={this.props.loading} />
        <CounterControl label="Increment" clicked={this.props.onIncreaseCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDeacreaseCounter}  />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
        <hr/>
        <CounterControl label="Load Post" clicked={this.props.onLoadPost}  />
        <hr/>
        {this.props.loadingData ?<div className="CounterControl">
          <p>id: {this.props.loadingData.id}</p> 
          <p>title: {this.props.loadingData.title}</p> 
          <p>userId: {this.props.loadingData.userId}</p> 
        </div> : null}
      </Fragment>
    )
  }
}

const mapStateToProps = (state: AppState ): StoreState => {
  return {
    counter: state.counter.counter,
    loading: state.common.loading,
    error: state.common.error,
    loadingData: state.posts.loadingData
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
  return {
    onLoadPost: async () => { await dispatch(PostActions.getPost())},
    onAddCounter: () => dispatch(CounterActions.add(5)),
    onSubtractCounter: () => dispatch(CounterActions.subtract(5)),
    onIncreaseCounter: () => dispatch(CounterActions.increment()),
    onDeacreaseCounter: () => dispatch(CounterActions.decrease())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

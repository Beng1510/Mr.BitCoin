import { userService } from '../../services/UserService'

// Action Dispatcher
export function loadUser() {
  return async dispatch => {
    const user = await userService.getUser()
    dispatch({ type: 'SET_USER', user })
  }
}

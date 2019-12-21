export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    fetch('http://localhost:3000/api/v1/users')
    .then(resp => resp.json())
    .then(users => {
      dispatch({ 
        type: 'RECEIVE_USERS', 
        users: users.data
      })
    })
  }
}
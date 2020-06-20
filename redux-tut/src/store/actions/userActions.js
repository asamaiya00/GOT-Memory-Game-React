export const UPDATE_USER = 'UPDATE_USER';

const fetch_user = (dispatch) => {
    fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(res => dispatch({ type: UPDATE_USER, payload: res.data }))
}
// const update_user = { type: 'UPDATE_USER', payload: 'bitfumes' }; 

export default fetch_user;
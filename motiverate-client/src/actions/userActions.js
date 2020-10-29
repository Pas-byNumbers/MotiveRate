import { fetchAllGoals } from "./goalActions";
import { fetchAllUpdates } from "./updateActions";

const loginUser = (userObj) => ({
  type: "LOGIN_USER",
  payload: userObj.data,
});

export const logoutUser = () => ({
  type: "LOGOUT_USER",
});

export const fetchAllUsers = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_USERS" });
    fetch("http://localhost:3000/api/v1/users")
      .then((resp) => resp.json())
      .then((users) => {
        dispatch({
          type: "RECEIVE_USERS",
          payload: users.data,
        });
      });
  };
};

export const userCreate = (user) => {
  return async (dispatch) => {
    const resp = await fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const credentials = await resp.json();
    if (credentials.message) {
      alert(credentials.message);
    } else {
      localStorage.setItem("token", credentials.jwt);
      dispatch(loginUser(credentials.user));
    }
  };
};

export const userUpdate = (user) => {
  const token = localStorage.token;
  return async (dispatch) => {
    const resp = await fetch(
      `http://localhost:3000/api/v1/users/${user.userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user }),
      }
    );
    const credentials = await resp.json();
    if (credentials.message) {
      alert(credentials.message);
    } else {
      localStorage.setItem("token", credentials.jwt);
      dispatch(loginUser(credentials.user));
    }
    dispatch(fetchAllGoals());
    dispatch(fetchAllUpdates());
  };
};

export const userDelete = (user) => {
  const token = localStorage.token;
  return async (dispatch) => {
    await fetch(`http://localhost:3000/api/v1/users/${user.userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
};

export const userLogInFetch = (user) => {
  return async (dispatch) => {
    const resp = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const credentials = await resp.json();
    if (credentials.message) {
      alert(credentials.message);
    } else {
      localStorage.setItem("token", credentials.jwt);
      dispatch(loginUser(credentials.user));
    }
  };
};

export const getProfileFetch = () => {
  return async (dispatch) => {
    const token = localStorage.token;
    if (token) {
      const resp = await fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const credentials = await resp.json();
      if (credentials.message) {
        localStorage.removeItem("token");
      } else {
        dispatch(loginUser(credentials.user));
      }
    }
  };
};

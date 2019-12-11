export const loginPost = (url, body) => {
  return fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body
  });
};

export const post = (url, body) => {
  return fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
    },
    body: body
  });
};

export const get = url => {
  return fetch(url, {
    method: "GET",
    credentials: "include",
  })
};

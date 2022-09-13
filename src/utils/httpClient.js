const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API+path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjNlMzJhNzEzZmUwZmM0ZGIzYTU1YTdkMGVmNWJjMiIsInN1YiI6IjYzMjBhOTY2ZTlkYTY5MDA4MWUwNzk1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M-cEAejrJUlaUAS-VS9mQhsg5Tsm-WB0Fj98ck6QqvE",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then(result => result.json());
}

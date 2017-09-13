export default class Ajax {
  static get(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) resolve(xhr.response);
          else reject(xhr.statusText);
        }
      };
    });
  }

  static post(url, data) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(data);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) resolve(xhr.response);
          else reject(xhr.statusText);
        }
      };
    });
  }
  static put(url, data) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', url);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(data);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) resolve(xhr.response);
          else reject(xhr.statusText);
        }
      };
    });
  }

  static delete(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('DELETE', url);
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) resolve(xhr.response);
          else reject(xhr.statusText);
        }
      };
    });
  }
}


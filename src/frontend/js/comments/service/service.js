import * as ajax from '../../utils/ajax';
var faillint;
const onError = (xhr, status, err) => {
  console.error(status, err.toString());
};

export function getCommentsFromApi(commentsApiUrl) {
  const promise = ajax.get(commentsApiUrl);

  promise.error(onError);

  return promise;
}

export function createNewComment(commentsApiUrl, comment) {
  const promise = ajax.post(commentsApiUrl, comment);

  promise.error(onError);

  return promise;
}

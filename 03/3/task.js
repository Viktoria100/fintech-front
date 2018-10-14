/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  const newPromise = new Promise((resolve, reject) => {
    const resolveValues = [];

    if (promises.length === 0) {
      resolve(resolveValues);
    }
    let numberOfPromisesMade = 0;

    promises.forEach((promise, i) => {
      promise
        .then(
          result => {
            resolveValues[i] = result;
            numberOfPromisesMade++;
            if (numberOfPromisesMade === promises.length) {
              resolve(resolveValues);
            }
          }
        )
        .catch(
          error => {
            reject(error);
          }
        );
    });
  });

  return newPromise;
}

module.exports = promiseAll;

/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.race,
 * которая возвращает в качестве результата промис c первым resolve value или reject value в массиве исходных промисов
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */

function promiseRace(promises) {
  const newPromise = new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise
        .then(
          result => {
            resolve(result);
          }
        )
        .catch(
          error => {
            reject(error);
          }
        );
    }
    );
  });

  return newPromise;
}

module.exports = promiseRace;

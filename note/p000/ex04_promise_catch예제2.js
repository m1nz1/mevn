const face = Math.random() < 0.7;

const watch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('이상형 발견!! ❤'), 1500);
  });
};

const talk = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (face) {
        resolve(num + '=> 연락처 좀 주세요');
      } else {
        reject(new Error(num + '=> 바로 철벽'));
      }
    }, 1500);
  });
};

const take = (seeu) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(seeu + '=> 또 만나요');
    }, 1500);
  });
};

watch()
.then(talk)
  .catch((me) => {
    return me + ' 혼자있고 싶어요. ';
  })
  .then(take)
  .then(console.log)
  .catch(console.log);

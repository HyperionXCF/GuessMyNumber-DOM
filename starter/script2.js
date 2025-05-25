let secretNum = Math.trunc(Math.random() * 20);
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (guess === '') {
    document.querySelector('.message').textContent = `Enter a Number !`;
  } else if (guess > secretNum) {
    document.querySelector('.message').textContent =
      'guess is greater than actual';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = '0';
      document.querySelector('.number').textContent = '😢';
      document.querySelector('.message').textContent = 'you lose !';
      document.querySelector('body').style.backgroundColor = '#DC143C';
    }
  } else if (guess < secretNum) {
    document.querySelector('.message').textContent =
      'guess is lower than actual';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = '0';
      document.querySelector('.message').textContent = 'you lose !';
      document.querySelector('.number').textContent = '😢';
      document.querySelector('body').style.backgroundColor = '#DC143C';
    }
  } else {
    document.querySelector('.message').textContent = 'Correct Guess !';
    document.querySelector('body').style.backgroundColor = '#32CD32';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = '🥳🥳🥳';
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.trunc(Math.random() * 20);
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').value = '';
  document.querySelector('.number').style.width = '20rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
});

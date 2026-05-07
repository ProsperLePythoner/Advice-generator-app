const diceBtn = document.getElementById('diceButton');
const adviceId = document.getElementById('adviceId');
const adviceText = document.getElementById('adviceText');
const loading = document.getElementById('loading'); // External bar
const error = document.getElementById('error');

async function getAdvice() {
  try {
    loading.classList.remove('hidden');
    loading.classList.add('show'); // Animate bar
    error.classList.add('hidden');
    
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) throw new Error('API failed');
    
    const data = await response.json();
    adviceId.textContent = `Advice #${data.slip.id}`;
    adviceText.textContent = data.slip.advice;
  } catch (err) {
    error.classList.remove('hidden');
  } finally {
    loading.classList.remove('show');
    setTimeout(() => loading.classList.add('hidden'), 300); // Fade out
  }
}

diceBtn.addEventListener('click', getAdvice);
getAdvice(); // Initial load
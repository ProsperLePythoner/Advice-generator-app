const diceBtn = document.getElementById('diceBtn');
const adviceId = document.getElementById('adviceId');
const adviceText = document.getElementById('adviceText');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

async function getAdvice() {
  try {
    loading.classList.remove('hidden');
    error.classList.add('hidden');
    
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) throw new Error('API failed');
    
    const data = await response.json();
    adviceId.textContent = `Advice #${data.slip.id || 'N/A'}`;
    adviceText.textContent = data.slip.advice;
  } catch (err) {
    error.classList.remove('hidden');
    console.error(err);
  } finally {
    loading.classList.add('hidden');
  }
}

diceBtn.addEventListener('click', getAdvice);

// Load initial advice
getAdvice();
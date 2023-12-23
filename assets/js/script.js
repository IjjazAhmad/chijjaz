// home section typing effect 

const words = ["MernStack Developer", "AI ChatBot Developer"];
let i = 0;
let j = 0;
let isDeleting = false;
let typingInterval = 200;
let deletingInterval = 50;

function type() {
  const typingText = document.getElementById('typing-text');
  const currentWord = words[i];
  const currentLetter = currentWord[j];

  if (isDeleting) {
    typingText.innerHTML = currentWord.substring(0, j - 1);
    j--;

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  } else {
    typingText.innerHTML = currentWord.substring(0, j + 1);
    j++;

    if (j === currentWord.length) {
      isDeleting = true;
    }
  }

  const interval = isDeleting ? deletingInterval : typingInterval;
  setTimeout(type, interval);
}

setTimeout(type, typingInterval);



// ------------- counter section




const counters = document.querySelectorAll('.counter-value');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start the counter animation
      animateCounter(entry.target);
      // Stop observing this element
      observer.unobserve(entry.target);
    }
  });
}, options);

// Observe each counter value element
counters.forEach(counter => {
  observer.observe(counter);
});

// Function to animate the counter
function animateCounter(counter) {
  const count = parseInt(counter.dataset.count);
  const duration = 20000;
  const step = Math.ceil(count / (duration / 10));
  let currentCount = 0;

  const timer = setInterval(() => {
    currentCount += step;
    counter.innerText = currentCount.toLocaleString();

    if (currentCount >= count) {
      clearInterval(timer);
      counter.innerText = count.toLocaleString();
    }
  }, 10);
}

  
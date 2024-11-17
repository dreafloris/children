function checkQuiz() {
    let score = 0;

    // Сұрақтарға жауаптарды тексеру
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');

    if (q1 && q1.value === "correct") {
        score++;
    }
    if (q2 && q2.value === "correct") {
        score++;
    }

    // Нәтиже көрсету
    const result = document.getElement

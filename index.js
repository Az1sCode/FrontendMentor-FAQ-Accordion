document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');

    questions.forEach((question) => {
        question.addEventListener('click', () => {
            const btnPlus = question.lastElementChild;
            btnPlus.classList.toggle('active')

            const answer = question.nextElementSibling;
            if (answer && answer.classList.contains('answer')) {
                answer.classList.toggle('active');
            }
        });
    });
});
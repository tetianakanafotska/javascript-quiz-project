class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  // class Question {
  //     constructor(text, choices, answer, difficulty) {
  //       this.text = text;
  //       this.choices = choices;
  //       this.answer = answer;
  //       this.difficulty = difficulty;
  //     }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    let currentIndex = this.questions.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.questions[currentIndex], this.questions[randomIndex]] = [
        this.questions[randomIndex],
        this.questions[currentIndex],
      ];
    }
  }

  checkAnswer(answer) {
    if (answer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswers++;
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if (this.currentQuestionIndex === this.questions.length) {
      return true;
    }
  }
}

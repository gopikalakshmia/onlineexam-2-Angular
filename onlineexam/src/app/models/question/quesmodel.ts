export interface Quesmodel {

        id: number,
        question: string,
        description: string,
        answers: {
          answer_a: string,
          answer_b: string,
          answer_c: string,
          answer_d: string,
          answer_e: null,
          answer_f: null
        },
        multiple_correct_answers: string,
        correct_answers: {
          answer_a_correct: string,
          answer_b_correct: string,
          answer_c_correct: string,
          answer_d_correct: string,
          answer_e_correct: string,
          answer_f_correct: string
        },
        explanation: string,
        tip: null,
        tags: [],
        category: string,
        difficulty: string
      
}

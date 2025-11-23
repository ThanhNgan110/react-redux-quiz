import React from "react";
import { Box, Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { decode } from 'html-entities';
import type { RootState } from "../../store";
import type { IQuestion } from "../../types";
import { updateScore } from '../../slices/question.slice';


// https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=boolean

function Question() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formQuestion = useSelector((state: RootState) => state.question.form);
  const score = useSelector((state: RootState) => state.question.score);

  const [questions, setQuestions] = React.useState<IQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [options, setOptions] = React.useState<string[]>([]);

  React.useEffect(() => {
    const { category, amount, type, difficulty } = formQuestion;

    if(!category || !amount || !type || !difficulty) {
      return;
    }

    async function fetchQuestion() {
      try {
        const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);
        const data = await res.json();
        const results = data.results || [];
        const questionItem = results[questionIndex];
        const dataOptions = [...questionItem.incorrect_answers];
        dataOptions.splice(
          Math.floor(Math.random() * 4),
          0,
          questionItem.correct_answer
        )

        setOptions(dataOptions);
        setQuestions(data.results || []);
      } catch(err) {}
    }
    fetchQuestion();
  }, [formQuestion]);


  // handle answer of next question
  React.useEffect(() => {
    if(questionIndex === 0) {
      return;
    }
    const questionItem = questions[questionIndex];
    const dataOptions = [...questionItem.incorrect_answers];
    dataOptions.splice(
      Math.floor(Math.random() * 4),
      0,
      questionItem.correct_answer
    )
    setOptions(dataOptions);
  }, [questionIndex])

  console.log('questions: ', questions)

  function handleAnswer(content: string) {
    const correct_answer = questions[questionIndex].correct_answer;

    if(content === correct_answer) {
      // setScore(prevState => prevState + 1)
      dispatch(updateScore())
    }

    // 0 + 1 = 1 < 5
    // 4 + 1 = 5 === 5
    if (questionIndex + 1 === questions.length) {
      navigate('/final-score');
      return;
    }
    setQuestionIndex(prevState => prevState + 1)
  }

  function gotoDashboard() {
    navigate('/')
  }

  return (
    <>
      <Box>
        <Typography variant="h4" align="center">
          Question {questionIndex + 1}
        </Typography>
      </Box>
      
      {questions.length === 0 ? (
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          Pleas go to dashboard to config question. <br /><br />
          <Button
            variant="contained"
            sx={{ mb: 2 }}
            onClick={gotoDashboard}
          >
            Go to dashboard
          </Button>
        </Box>
      ) : (
        <>
          <Box sx={{ mt: 5 }}>
            <Typography variant="body1">
              {decode(questions[questionIndex].question || '')}
            </Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            {options.map(option => (
              <Button
                key={option}
                fullWidth
                variant="contained"
                sx={{ mb: 2 }}
                onClick={() => handleAnswer(option)}
              >
                {decode(option)}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Typography variant="body1" align="center">
              Score: {score}/{questions.length}
            </Typography>

            <Typography variant="body1" align="center">
              Timer: 0:30
            </Typography>
          </Box>
        </>
      )}

      
    </>
  )
}

export default Question
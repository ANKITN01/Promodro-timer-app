import React, { useState, useEffect } from 'react';
import { Center, Card, Stack, Heading, Button, ButtonGroup } from '@chakra-ui/react';

const ProductCard = () => {
  const [isBreak, setIsBreak] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(isBreak ? 5 : 1);
  const [seconds, setSeconds] = useState(0);
  const [start, setIsActive] = useState(false);
  const [resetOccurred, setResetOccurred] = useState(false);


  useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (timerMinutes === 0) {
            if (isBreak) {
              setIsBreak(false);
              setTimerMinutes(25);
            } else {
              setIsBreak(true);
              setTimerMinutes(5);
            }
            setSeconds(0);
          } else {
            setTimerMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start, timerMinutes, seconds, isBreak]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };
  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimerMinutes(25);
    setSeconds(0);
    setResetOccurred(true);
  };
  

  return (
    <Center height="100vh"  >
      <Card maxW='sm' border="1px solid black" padding="10px" borderRadius="5px">
        <Stack p='4' align='center'>
          <Heading>{`${String(timerMinutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</Heading>
          {isBreak ? (
  <h2>Break Time</h2>
) :start ? (
  <h2>Timer Started</h2>
) :  resetOccurred ? (
  <h2>Reset Time</h2>
) : (
  <h2>Pause Time</h2>
)}

          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={startTimer}>
              Start Timer
            </Button>
            <Button variant='ghost' colorScheme='blue' onClick={pauseTimer}>
              Pause Timer
            </Button>
            <Button variant='ghost' colorScheme='blue' onClick={resetTimer}>
              Reset Timer
            </Button>
          </ButtonGroup>
        </Stack>
      </Card>
    </Center>
  );
};

export default ProductCard;

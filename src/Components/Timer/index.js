import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import {Container, TimerText} from './styles';

const Timer = forwardRef(({time, onFinish}, ref) => {
  const timer = useRef();
  const [timerState, setTimerState] = useState(10);

  useImperativeHandle(ref, () => ({
    resetTimer() {
      setTimerState(time);
    },
  }));

  useEffect(() => {
    startTimer();
    setTimerState(time);
  }, []);

  useEffect(() => {
    setTimerState(time);
  }, [timer]);

  const startTimer = () => {
    clearInterval(timer.current);

    timer.current = setInterval(() => {
      setTimerState(prev => prev - 1);
    }, 1000);
  };

  useEffect(() => {
    if (timerState < 0) {
      onFinish(null);
      setTimerState(time);
    }
  }, [timerState]);

  return (
    <Container>
      <TimerText>{timerState}</TimerText>
    </Container>
  );
});

export default Timer;

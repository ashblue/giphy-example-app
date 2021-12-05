import React, { useCallback } from 'react';
import { Alert } from 'react-bootstrap';

interface IProps {
  text?: string;
}

const Warning = ({ text }: IProps) => {
  const printError = useCallback(() => {
    if (text) {
      return <Alert variant="warning">{text}</Alert>;
    }

    return null;
  }, [text]);

  return <>{printError()}</>;
};

export default Warning;

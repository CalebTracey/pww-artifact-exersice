import { useCallback, useState } from 'react';
import faker from 'faker';

const useFakeSentences = ({ size }) => {
  const arr = new Array(size).fill();
  const [result, setResult] = useState({
    size,
    data: null,
    isLoading: false,
  });

  const getData = useCallback(() => {
    setResult((prevState) => ({ ...prevState, isLoading: true }));
    const data = arr.map(() => ({
      id: faker.datatype.uuid().toString(),
      text: faker.lorem.sentence(),
    }));
    setResult({ data, isLoading: false });
  }, [arr]);

  return [result, getData];
};

export default useFakeSentences;

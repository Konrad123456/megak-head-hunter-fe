import { useEffect, useState } from 'react';
import HumanResourcesSingleStudent from '../HumanResourcesSingleStudent/HumanResourcesSingleStudent';
import { useStudentsMutation } from '../../../../src/api/studentsListApi';
import { StudentsListResponse } from 'types';

export const HumanResourcesAvailableStudents = () => {
  const [students] = useStudentsMutation();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState<StudentsListResponse>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await students({ pageNumber: 1, limit: 10 });

        // @ts-ignore
        if (response.error) {
          // @ts-ignore
          setError(response.error.data.message);
          setIsLoading(false);
        }

        // @ts-ignore
        if (response.data) {
          setIsLoading(false);
          setError('');
          // @ts-ignore
          setPeople(response.data);
          console.log('!!! response: ', response);
        }
      } catch (e: any) {
        setError('Coś poszło nie tak');
      }
    })();
  }, []);

  return (
    <div className='human-resources-available-students'>
      {error && <h1>Cos poszło nie tak</h1>}
      {isLoading && <h1>Ładuję stronę</h1>}

      {people.length &&
        people.map((person) => (
          <HumanResourcesSingleStudent key={person.id} {...person} />
        ))}
      {!people.length && <h1>Brak studentów</h1>}
    </div>
  );
};

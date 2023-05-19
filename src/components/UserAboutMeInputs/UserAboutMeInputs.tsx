import React from 'react';
import staticText from '../../languages/en.pl';
import { Textarea } from '../Formik/Textarea/Textarea';
import { Input } from '../Formik/Input/Input';
import { FieldArray } from 'formik';

const userPageText = staticText.userPage;

export const UserAboutMeInputs = () => (
  <div className='user-page__col3'>
    <h2>{userPageText.columnTitle.aboutMe}</h2>
    <Textarea
      classType={'user-page'}
      label={userPageText.textarea.bio.label}
      name={'bio'}
      rows={6}
      placeholder={userPageText.textarea.bio.placeholder}
    />
    <FieldArray name='portfolioUrls'>
      {(props) => {
        const { push, remove, form } = props;
        const { values } = form;
        const { portfolioUrls } = values as { portfolioUrls: string[] };
        return (
          <>
            {portfolioUrls.length > 0 &&
              portfolioUrls.map((url, i) => (
                <Input
                  key={i}
                  classType={'user-page'}
                  label={i ? '' : userPageText.textarea.portfolioUrls.label}
                  name={`portfolioUrls.${i}`}
                  type='text'
                  placeholder={userPageText.textarea.portfolioUrls.placeholder}
                >
                  <button
                    className='user-page__container_btn'
                    type='button'
                    onClick={() => remove(i)}
                    style={i === 0 ? { display: 'none' } : undefined}
                  >
                    -
                  </button>
                  <button
                    className='user-page__container_btn'
                    type='button'
                    onClick={() => push('')}
                    style={
                      i === portfolioUrls.length - 1 && portfolioUrls.length < 5
                        ? undefined
                        : { display: 'none' }
                    }
                  >
                    +
                  </button>
                </Input>
              ))}
          </>
        );
      }}
    </FieldArray>
    <FieldArray name='projectUrls'>
      {(props) => {
        const { push, remove, form } = props;
        const { values } = form;
        const { projectUrls } = values as { projectUrls: string[] };
        return (
          <>
            {projectUrls.length > 0 &&
              projectUrls.map((url, i) => (
                <Input
                  key={i}
                  classType={'user-page'}
                  label={i ? '' : userPageText.textarea.projectUrls.label}
                  name={`projectUrls.${i}`}
                  type='text'
                  placeholder={userPageText.textarea.projectUrls.placeholder}
                >
                  <button
                    className='user-page__container_btn'
                    type='button'
                    onClick={() => remove(i)}
                    style={i === 0 ? { display: 'none' } : undefined}
                  >
                    -
                  </button>
                  <button
                    className='user-page__container_btn'
                    type='button'
                    onClick={() => push('')}
                    style={
                      i === projectUrls.length - 1 && projectUrls.length < 5
                        ? undefined
                        : { display: 'none' }
                    }
                  >
                    +
                  </button>
                </Input>
              ))}
          </>
        );
      }}
    </FieldArray>
  </div>
);

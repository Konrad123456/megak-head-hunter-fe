import React, {ChangeEvent, useState} from 'react';
import {HumanResourcesHeader} from '../../components/HumanResources/HumanResourcesHeader/HumanResourcesHeader';
import {HumanResourcesSearch} from '../../components/HumanResources/HumanResourcesSearch/HumanResourcesSearch';
import {
    HumanResourcesAvailableStudents
} from '../../components/HumanResources/HumanResourcesAvailableStudents/HumanResourcesAvailableStudents';
import {
    HumanResourcesToTalkStudents
} from '../../components/HumanResources/HumanResourcesToTalkStudents/HumanResourcesToTalkStudents';
import Paggination from '../../components/Paggination/Paggination';

export const HumanResourcesPage = () => {
    const [isAvailableStudents, setIsAvailableStudents] = useState<boolean>(true);
    const [page, setPage] = useState(1)
    const [limitOnPage, setLimitOnPage] = useState(10)
    const [maxStudentsNumber, setMaxStudentsNumber] = useState(0)

    const shouldDisplayAvailableStudents = (option: boolean) => {
        setIsAvailableStudents(option);
    };

    const handleLimit = (e: ChangeEvent<HTMLInputElement>) => {
        setLimitOnPage(Number(e.currentTarget.value))
    }

    const handleNextPage = () => {
        setPage((prev: number) => ++prev)
    }
    const handlePreviousPage = () => {
        if (page < 2) {
            return
        } else {
            setPage((prev: number) => --prev)
        }
    }

    return (
        <div className='human-resources-page'>
            <HumanResourcesHeader
                shouldDisplayAvailableStudents={shouldDisplayAvailableStudents}
            />

            <div className='human-resources-page__container'>
                <HumanResourcesSearch/>
                {isAvailableStudents ? (
                    <HumanResourcesAvailableStudents/>
                ) : (
                    <HumanResourcesToTalkStudents
                        setLimitOnPage={setLimitOnPage}
                        page={page}
                        limitOnPage={limitOnPage}
                        setMaxStudentsNumber={setMaxStudentsNumber}
                    />
                )}
            </div>

            <Paggination
                limit={limitOnPage}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handleLimit={handleLimit}
                maxStudentsNumber={maxStudentsNumber}/>
        </div>
    );
};

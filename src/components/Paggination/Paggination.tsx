import {ChangeEvent} from "react";

interface Props{
    handleNextPage:() => void;
    handlePreviousPage:() => void;
    handleLimit: (e: ChangeEvent<HTMLInputElement>) => void;
    limit:number;
    maxStudentsNumber:number;
}

const Paggination = ({handleNextPage,handlePreviousPage,handleLimit,limit,maxStudentsNumber}:Props) => {
  return (
    <div className='paggination'>
      <span className='paggination__elements-number'>Ilość elementów</span>
      <input
        className='paggination__input'
        min={1}
        max={20}
        value={limit>maxStudentsNumber?maxStudentsNumber:limit}
        type='number'
        onChange={handleLimit}
      />
      <span className='paggination__numbers'>{`${maxStudentsNumber<10?maxStudentsNumber:limit} z ${maxStudentsNumber}`}</span>
      <button
        disabled={maxStudentsNumber<10?true:false} onClick={handlePreviousPage}
        className='paggination__button paggination__button--rm'
      >
        <span className='paggination__button-span material-symbols-outlined'>
          arrow_back_ios
        </span>
      </button>
      <button onClick={handleNextPage} disabled={maxStudentsNumber<10?true:false} className='paggination__button'>
        <span className='paggination__button-span material-symbols-outlined'>
          arrow_forward_ios
        </span>
      </button>
    </div>
  );
};

export default Paggination;

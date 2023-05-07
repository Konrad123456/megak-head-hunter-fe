const Paggination = () => {
  return (
    <div className='paggination'>
      <span className='paggination__elements-number'>Ilość elementów</span>
      <input
        className='paggination__input'
        min={1}
        max={20}
        value={10}
        type='number'
      />
      <span className='paggination__numbers'>10 z 11</span>
      <button
        disabled={true}
        className='paggination__button paggination__button--rm'
      >
        <span className='paggination__button-span material-symbols-outlined'>
          arrow_back_ios
        </span>
      </button>
      <button disabled={false} className='paggination__button'>
        <span className='paggination__button-span material-symbols-outlined'>
          arrow_forward_ios
        </span>
      </button>
    </div>
  );
};

export default Paggination;

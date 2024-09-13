import React from 'react'

interface buttonComponentProps {
    ButtonName: string;
    className?: any;
    onClick?: any;
}

const ButtonComponent = ({ ButtonName, className, onClick }: buttonComponentProps) => {
  return (
    <>
        <div>
            <button onClick={onClick} className={`bg-[#000000] text-white rounded-[40px] text-[14px] font-semibold leading-[16.94px] text-center ${className}`}>{ButtonName}</button>
        </div>
    </>
  )
}

export default ButtonComponent

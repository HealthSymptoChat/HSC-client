import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  currency: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  currency,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 space-y-3 border rounded-lg border-black dark:border-slate-700">
      {/* Render the children here */}
      <div className="flex w-full justify-between items-center">
        {children}
        <div>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">{title}</h2>
          <p className="text-3xl font-bold text-slate-700 dark:text-slate-200">{total} {currency}</p> {/* Update this line */}
        </div>
      </div>
      {levelUp && (
        <svg
          className="fill-primary dark:fill-white"
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

        </svg>
      )}
      {levelDown && (
        <svg
          className="fill-secondary dark:fill-white"
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        </svg>
      )}
    </div>
  );
};

export default CardDataStats;

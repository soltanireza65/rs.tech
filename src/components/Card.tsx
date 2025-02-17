import React, { FC } from "react";

type IProps = {
  title: string;
  iconComponent: React.ReactNode;
  children: React.ReactNode;
};

const Card: FC<IProps> = ({ iconComponent, title, children }) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-zinc-800/30 transition-all duration-300 hover:border-emerald-500/30 hover:bg-black/50 hover-expand">
      <div className="flex items-center gap-3 mb-4">
        {iconComponent}
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Card;

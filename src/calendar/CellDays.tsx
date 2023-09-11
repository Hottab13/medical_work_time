interface Props extends React.PropsWithChildren{}

const CellDays:React.FC<Props> = ({ children }) => {
  return (
    <div className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
      <span className="text-gray-500">{children}</span>
      {children === 2 && (
        <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
          <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
            <span className="event-name">Педиатор</span>
            <span className="time">12:00~14:00</span>
          </div>
          <div className="event bg-green-500 text-white rounded p-1 text-sm mb-1">
            <span className="event-name">Окулист</span>
            <span className="time">18:00~20:00</span>
          </div>
        </div>
      )}
    </div>
  );
};
export { CellDays };

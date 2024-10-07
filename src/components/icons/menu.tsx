const Menu = () => {
    return (
        <div className="space-y-2 group">
            <div className="w-[50px] h-[3px] bg-white group-hover:bg-primary"></div>
            <div className="w-[28px] ms-auto h-[3px] bg-white group-hover:bg-primary group-hover:w-[50px] transition-all duration-200"></div>
        </div>
    );
};

export default Menu;

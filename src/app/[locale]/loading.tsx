import Loader from "@/components/icons/loader";

const Loading = () => {
    return (
        <div className="h-screen overflow-hidden grid place-items-center">
            <div className="size-fit animate-spin [animation-duration:3s]">
                <Loader />
            </div>
        </div>
    );
};

export default Loading;

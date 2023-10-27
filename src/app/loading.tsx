import { Spinner } from "@nextui-org/react";

function Loading() {
    return (
        <div className="h-[80vh] flex justify-center items-center"><Spinner size="sm" label="Loading..." /></div>
    )
}

export default Loading
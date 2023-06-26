import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
    const videoLengthInSeconds = moment()
        ?.startOf("day")
        ?.seconds(time)
        ?.format("H:mm:ss");
    return (
        <span className="absolute bottom-2 right-2 px-1 text-white text-[10px] rounded-md" style={{backgroundColor:"rgb(49,44,40)"}}>
            {videoLengthInSeconds}
        </span>
    );
};

export default VideoLength;
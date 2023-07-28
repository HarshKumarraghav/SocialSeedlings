import { useEffect, useState } from "react";
import moment from "moment";

const useReadableTime = (originalDate: string) => {
  const [readableDate, setReadableDate] = useState("");

  useEffect(() => {
    if (originalDate) {
      const formattedDate = moment(originalDate).format("MMMM Do");
      setReadableDate(formattedDate);
    }
  }, [originalDate]);

  return readableDate;
};

export default useReadableTime;

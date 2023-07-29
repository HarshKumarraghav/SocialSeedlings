import { useEffect, useState } from "react";
import moment from "moment";

/**
 * The useReadableTime function takes in a date string and returns a formatted date string in the
 * format "MMMM Do".
 * @param {string} originalDate - The `originalDate` parameter is a string representing a date in a
 * specific format.
 * @returns The `readableDate` variable is being returned.
 */
export const useReadableTime = (originalDate: string) => {
  const [readableDate, setReadableDate] = useState("");

  useEffect(() => {
    if (originalDate) {
      const formattedDate = moment(originalDate).format("MMMM Do");
      setReadableDate(formattedDate);
    }
  }, [originalDate]);

  return readableDate;
};

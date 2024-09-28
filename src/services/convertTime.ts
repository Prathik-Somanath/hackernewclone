import { formatDistanceStrict } from "date-fns";

export const ConvertTime = (number: number): string => {
    const now = new Date();
    return formatDistanceStrict(
        new Date(number * 1000),
        now,
        { addSuffix: true }
    )
}
"use client";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru";
import ReactTimeAgo from "react-time-ago";
import { useEffect } from "react";

export default function CustomTimeAgo({
  date,
}: React.ComponentProps<typeof ReactTimeAgo>) {
  TimeAgo.addDefaultLocale(en);
  TimeAgo.addLocale(ru);
  return <ReactTimeAgo date={date} />;
}

import Image from "next/image";
import styles from "./index.module.css";
import { formatDate } from "@/app/_libs/utils";

type Props = {
  date: string;
};

export default function NewsDate({ date }: Props) {
  return (
    <div className={styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {formatDate(date)}
    </div>
  );
}

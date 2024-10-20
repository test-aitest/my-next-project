import Image from "next/image";
import type { News } from "@/app/_libs/microcms";
import Date from "@/app/_components/Date";
import Category from "@/app/_components/Category";
import styles from "./index.module.css";

type Props = {
  news: News;
};

export default function Article({ news }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{news.title}</h1>
      <p className={styles.description}>{news.description}</p>
      <div className={styles.meta}>
        <Category category={news.category} />
        <Date date={news.publishedAt ?? news.createdAt} />
      </div>
      {news.thumbnail && (
        <Image
          src={news.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={news.thumbnail.width}
          height={news.thumbnail.height}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: news.content }}
      />
    </main>
  );
}

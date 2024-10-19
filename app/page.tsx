import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "テスト1",
      category: { name: "テスト1" },
      publishedAt: "2021-01-01",
      createdAt: "2021-01-01",
    },
    {
      id: "2",
      title: "テスト2",
      category: { name: "テスト2" },
      publishedAt: "2021-01-01",
      createdAt: "2021-01-01",
    },
    {
      id: "3",
      title: "テスト3",
      category: { name: "テスト3" },
      publishedAt: "2021-01-01",
      createdAt: "2021-01-01",
    },
  ],
};
const sliceData = data.contents.slice(0, 2);

export default function Home() {
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}

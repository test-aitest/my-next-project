"use client";

import Link from "next/link";
import Image from "next/image";
import style from "./index.module.css";
import { useState } from "react";
import cx from "classnames";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div>
      <nav className={cx(style.nav, isOpen && style.open)}>
        <ul className={style.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
        <button className={cx(style.button, style.close)} onClick={close}>
          <Image src="/close.svg" alt="閉じる" width={24} height={24} />
        </button>
      </nav>
      <button className={style.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}

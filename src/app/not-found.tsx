import Link from "next/link";
import styles from "@/app/_styles/not-found.module.scss";
import cn from "classnames/bind";
import { CiWarning } from "react-icons/ci";

const cx = cn.bind(styles);

export default function NotFound() {
  return (
    <div className={cx("Wrapper")}>
      <section className={cx("Content")}>
        <h2 className={cx("Title")}>
          <CiWarning color={"orange"} size={36} />
          결함이 있습니다…
        </h2>
        <p>
          무엇이 문제였는지 아직 확신할 수 없습니다.
          <br />
          <Link href="/" className={cx("Link")}>
            홈화면으로 가기
          </Link>
        </p>
      </section>
    </div>
  );
}

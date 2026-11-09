import dayjs from "dayjs";

export default function Footer() {
  return (
    <footer>
      <p>&copy; {dayjs().year()} Maxine Kho</p>
      <p>
        Built by{" "}
        <a href="https://audrey-kho.github.io" target="_blank" rel="noreferrer">
          AK
        </a>
      </p>
    </footer>
  );
}

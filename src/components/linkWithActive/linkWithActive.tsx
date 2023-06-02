import "./linkWithActive.css";

type LinkWithActiveProps = {
  url: string;
  text: string;
  activeItem: string;
};

export default function LinkWithActive({
  url,
  text,
  activeItem,
}: LinkWithActiveProps) {
  return (
    <a className={`link ${activeItem === url ? "active" : ""}`} href={url}>
      {text}
    </a>
  );
}

interface props {
  name: string;
}

export default function Label({ name }: props) {
  return <div className="hover:text-green-500">{name}</div>;
}

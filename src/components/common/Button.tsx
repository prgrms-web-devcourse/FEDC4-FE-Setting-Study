interface Type {
  text: string
}
export default function Button({ text }: Type) {
  return <button>{text}</button>
}

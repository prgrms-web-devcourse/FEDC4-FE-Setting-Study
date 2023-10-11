interface Type {
  text: string
}
export default function Button({ text: string }: Type) {
  return <button>{'text'}</button>
}

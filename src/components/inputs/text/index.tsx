export default function Text(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return <input {...props} className="border border-gray-300 rounded-md p-2" />;
}

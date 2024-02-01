export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8">{children}</div>
    </div>
  );
}

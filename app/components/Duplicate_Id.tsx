import { useState } from "react";

export default function Duplicate_Id({ id, onCheck }) {
  const [duid, setDuid] = useState(null);

  const handleCheckId = async () => {
    if (id) {
      const res = await fetch(`/api/auth/duplicate?id=${id}`);
      const data = await res.json();
      setDuid(data.duid);

      if (data.duid) {
        alert("사용 가능한 아이디입니다.");
        onCheck(true);
      } else {
        alert("중복된 아이디입니다.");
        onCheck(false);
      }
    }
  };
  return (
    <div
      onClick={handleCheckId}
      className="w-32 flex justify-center items-center bg-blue-500 rounded-xl cursor-pointer text-white font-bold hover:bg-blue-600 duration-500"
    >
      중복확인
    </div>
  );
}

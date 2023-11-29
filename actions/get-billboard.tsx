import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (di: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${di}`);

  return res.json();
};

export default getBillboard;

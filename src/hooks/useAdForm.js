import { useState } from "react";

export const useAdForm = () => {
  const [form, setForm] = useState({
    campaignName: "",
    objective: "",
    adText: "",
    cta: "",
    musicOption: "",
    musicId: ""
  });

  return { form, setForm };
};

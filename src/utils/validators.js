export const validateForm = (form) => {
  const errors = {};

  if (form.campaignName.length < 3)
    errors.campaignName = "Minimum 3 characters required";

  if (!form.adText || form.adText.length > 100)
    errors.adText = "Ad text required (max 100 chars)";

  if (!form.cta)
    errors.cta = "CTA is required";

  return errors;
};

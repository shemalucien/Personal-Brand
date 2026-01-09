import { getProfile, getEducation } from "@/lib/db";
import ContactSectionClient from "./contact-section-client";

export default async function ContactSection() {
  const profile = await getProfile();
  const education = await getEducation();

  return (
    <ContactSectionClient
      profile={profile}
      education={education}
    />
  );
}

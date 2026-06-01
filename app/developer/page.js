import { generatePageMetadata } from "../../src/components/SEO/generatePageMetadata";
import "../../src/styles/pages/developer.css";
import DeveloperClient from "./DeveloperClient";

export const metadata = generatePageMetadata({
  title: "Developer Dashboard | Aryan Kumar",
  description:
    "Live developer dashboard GitHub activity, npm packages, PyPI packages, technical writing, and current open-source projects.",
  path: "/developer",
  keywords:
    "aryanjsx developer dashboard, aryanjsx github, aryanjsx npm packages, aryanjsx open source, aryan kumar developer, aryanjsx blog, aryanjsx projects",
});

export default function DeveloperPage() {
  return <DeveloperClient />;
}

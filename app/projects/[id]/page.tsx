import type { Metadata } from "next";
import ProjectDetailView, { generateProjectMetadata } from "@/components/ProjectDetailView";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  return generateProjectMetadata("cz", id);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  return <ProjectDetailView locale="cz" id={id} />;
}

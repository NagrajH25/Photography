import { notFound } from "next/navigation";
import { Navbar } from "../../components/navbar/navbar";
import { Container } from "../../components/common/container";
import { ProjectHeader } from "../../components/project/project-header";
import { ProjectStory } from "../../components/project/project-story";
import { ImageGallery } from "../../components/project/image-gallery";
import { BeforeAfterSlider } from "../../components/project/before-after-slider";
import { projectDetails } from "../../data/site-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Container className="py-4">
        <Navbar />
        <div className="grid gap-6 py-10">
          <ProjectHeader title={project.title} meta={project.meta} />
          <ProjectStory story={project.story} />
          <ImageGallery items={[...project.gallery]} />
          <BeforeAfterSlider />
        </div>
      </Container>
    </main>
  );
}

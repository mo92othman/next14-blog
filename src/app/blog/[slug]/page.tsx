type BlogPostParams = {
  slug: string;
};

export default async function BlogPost({ params }: { params: BlogPostParams }) {
  const { slug } = await params;

  console.log(slug);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Blog Post {slug}</h1>
    </div>
  );
}

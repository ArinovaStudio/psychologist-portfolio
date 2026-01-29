import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React, { Suspense } from "react";
import Loader from "@/components/Loader";
import CustomTimeAgo from "@/components/CustomTimeAgo";
import CustomPortableText from "@/components/PortableText";
import GoBack from "@/components/GoBack";
const customBlogQuery = `
  *[_type == "blog" && _id == $myId][0]{
    _id,
    title,
    author,
    coverImage,
    content,
    publishedAt
  }
`;
export default function page({ params }: { params: Promise<{ id: string }> }) {
  const id = React.use(params).id;
  const details = React.use(client.fetch(customBlogQuery, { myId: id }));
  return (
    <Suspense fallback={<Loader />}>
      <div className="h-full min-h-screen p-5 my-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex justify-between">
           <GoBack/>
            <CustomTimeAgo date={details.publishedAt} />
          </div>
          <div className="space-y-4">
            <div>
              <Image
                src={urlFor(details.coverImage).width(600).height(400).url()}
                alt={"Cover Image"}
                height={200}
                width={500}
                className="max-h-130 w-full"
              />
            </div>
            <div>
             <CustomPortableText value={details.content}/>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

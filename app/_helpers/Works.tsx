import React from "react";
import { client } from "@/sanity/lib/client";
import { WorksQuery } from "@/lib/queries";
// import { motion } from "framer-motion";
import WorkCard from "@/components/cards/WorkCard";
export default function Works() {
  const projects = React.use(client.fetch(WorksQuery));

  return (
    <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
      {projects.map((project: any, index: number) => (
        // <motion.div
        //   key={index}
        //   initial={{ opacity: 0, y: 30 }}
        //   whileInView={{ opacity: 1, y: 0 }}
        //   viewport={{ once: true }}
        //   transition={{ duration: 0.6, delay: index * 0.15 }}
        //   className="group"
        // >
        <WorkCard key={index} project={project} />
        // </motion.div>
      ))}
    </div>
  );
}

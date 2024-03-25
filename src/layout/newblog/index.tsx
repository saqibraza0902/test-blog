"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { db } from "@/utils/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { config } from "@/utils/editor";
import Input from "@/ui/form/Input";
import InputFile from "@/ui/form/FileInput";
import RadioInput from "@/ui/form/Radio";
import Button from "@/ui/form/Button";
import Pills from "@/ui/components/Pills";
import ImageWithFallback from "@/utils/Imgwithfallback";
import { get_tags } from "@/utils/firebase.function";
import { slugify } from "@/utils/slugify";
import { uploadFile } from "@/utils/uploadFile";
const initialState = {
  title: "",
  desc: "",
  content: "",
  tags: [],
  featuredImage: {
    url: "",
    alt: "",
  },
  isArchived: false,
  autherId: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};
const DashboardLayout = () => {
  const [tags, setTags] = useState<any>([]);
  const [fields, setFields] = useState(initialState);
  const [file, setFile] = useState<null | any>();
  const postData = async () => {
    try {
      const docRef = await addDoc(collection(db, "Blogs"), {
        ...fields,
        slug: slugify(fields.title),
      });
      console.log("Data written with ID:", docRef.id);
      setFields(initialState);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  useEffect(() => {
    const getTags = async () => {
      const mytags = await get_tags();
      setTags(mytags);
    };
    getTags();
    const runs = async () => {
      if (file) {
        const imageUrl = await uploadFile(file);
        setFields({
          ...fields,
          featuredImage: { url: imageUrl, alt: imageUrl },
        });
      }
    };
    runs();
  }, [file]);
  const handleTagClick = (selectedTag: string) => {
    setFields((prevFields: any) => ({
      ...prevFields,
      tags: [...prevFields.tags, selectedTag],
    }));
  };
  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="w-2/3 mx-auto p-4 flex flex-col gap-5">
        <p>Available Tags</p>
        <div className="flex gap-2">
          {tags.map((tag: any) => (
            <Pills
              key={tag.id}
              isIcon={false}
              handleClick={() => handleTagClick(tag.name)}
            >
              {tag.name}
            </Pills>
          ))}
        </div>
        <div className="flex flex-col w-full gap-5">
          <Input
            placeholder="Blog title"
            className=""
            value={fields.title}
            onChange={(e) => setFields({ ...fields, title: e.target.value })}
          />
          {fields.featuredImage.url ? (
            <div className="h-full w-full">
              <ImageWithFallback
                className="w-full h-full"
                alt=""
                src={fields.featuredImage.url}
              />
            </div>
          ) : (
            <div className="flex justify-between gap-5">
              <InputFile
                label="Image"
                onChange={(e: any) => setFile(e.target.files[0])}
                accept=".jpg, .png, .jpeg"
                name={file?.name}
                className="w-full"
              />
            </div>
          )}
          <Input
            placeholder="description"
            value={fields.desc}
            onChange={(e) => setFields({ ...fields, desc: e.target.value })}
          />
        </div>
        <div>
          <p>Archive Your blog</p>
          <div className="flex gap-10">
            <RadioInput
              checked={fields.isArchived}
              type="radio"
              name="archive"
              label="Yes"
              onChange={() =>
                setFields((prevFields) => ({
                  ...prevFields,
                  isArchived: true,
                }))
              }
            />
            <RadioInput
              checked={!fields.isArchived}
              type="radio"
              name="archive"
              label="No"
              onChange={() =>
                setFields((prevFields) => ({
                  ...prevFields,
                  isArchived: false,
                }))
              }
            />
          </div>
        </div>
        <JoditEditor
          value={fields.content}
          config={config}
          onBlur={(newContent) => setFields({ ...fields, content: newContent })}
        />
        <div>
          <p>Tags in your blog</p>
          <div className="flex gap-5">
            {fields.tags.map((tag, index) => (
              <Pills isIcon={false} key={index}>
                {tag}
              </Pills>
            ))}
          </div>
        </div>
        <Button className="" onClick={() => postData()}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default DashboardLayout;

"use client";
import React, { useEffect, useState } from "react";
import { db, storage } from "@/utils/firebase"; // Make sure to import storage
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import Input from "@/ui/form/input-component";
import InputFile from "@/ui/form/file-input";
import RadioInput from "@/ui/form/radio-component";
import Pills from "@/ui/components/pills-component";
import ImageWithFallback from "@/utils/image-with-fallback";
import { get_tags } from "@/utils/function";
import { slugify } from "@/utils/slugify";
import { uploadFile } from "@/utils/uploadFile";
import { getAuth } from "firebase/auth";
import { ButtonLayout } from "@/ui/components/animated-button";
import { toast } from "react-toastify";
import { BlogSchema } from "@/schema";
import { FIREBASE_URLS } from "@/utils/urls";
import RichTextEditor from "@/utils/text-editor";

const initialState = {
  title: "",
  desc: "",
  tags: [],
  featuredImage: {
    url: "",
    alt: "",
  },
  isArchived: false,
  isFeatured: false,
  autherId: "",
};
const DashboardLayout = () => {
  const [tags, setTags] = useState<any>([]);
  const [progress, setProgress] = useState(0);
  const [fields, setFields] = useState(initialState);
  const [content, setContent] = useState("");
  const [file, setFile] = useState<null | any>(null);
  const [errors, setErrors] = useState<any[]>([]);
  const auth = getAuth();
  const user = auth.currentUser;
  const postData = async () => {
    try {
      const timestamp = Timestamp.now();
      const response = BlogSchema.safeParse({
        title: fields.title,
        desc: fields.desc,
        tags: fields.tags,
        url: fields.featuredImage.url,
        content: content,
      });
      if (!response.success) {
        let errArr: any[] = [];
        const { errors: err } = response.error;
        for (var i = 0; i < err.length; i++) {
          errArr.push({ for: err[i].path[0], message: err[i].message });
        }
        setErrors(errArr);
        throw err;
      }

      setErrors([]);
      await addDoc(collection(db, "Blogs"), {
        ...fields,
        slug: slugify(fields.title),
        autherId: user?.uid,
        content,
        createdAt: timestamp,
        updatedAt: timestamp,
      });
      console.log("This is content", content);
      setFields(initialState);
      toast.success("Blog posted");
      setContent("");
    } catch (error) {
      console.log(error);
      toast.error("Error posting blog");
    }
  };

  const handleDiscard = async () => {
    if (fields.featuredImage.url) {
      const imageRef = ref(storage, fields.featuredImage.url);
      try {
        await deleteObject(imageRef);
        console.log("Image deleted successfully");
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
    setFields(initialState);
    setContent("");
  };

  useEffect(() => {
    const getTags = async () => {
      const mytags = await get_tags();
      setTags(mytags);
    };
    getTags();

    const runs = async () => {
      if (file) {
        const imageUrl = await uploadFile(
          file,
          FIREBASE_URLS.BLOGS_IMAGES,
          setProgress
        );

        setFields({
          ...fields,
          featuredImage: { url: imageUrl, alt: imageUrl },
        });
        setProgress(0);
        setFile(null);
      }
    };
    file && runs();
  }, [file, fields]);

  const handleTagClick = (selectedTag: string) => {
    setFields((prevFields: any) => {
      const alreadySelected = prevFields.tags.includes(selectedTag);
      const selectedTags = alreadySelected
        ? prevFields.tags.filter((tag: string) => tag !== selectedTag)
        : prevFields.tags.length < 5
        ? [...prevFields.tags, selectedTag]
        : prevFields.tags;

      return {
        ...prevFields,
        tags: selectedTags,
      };
    });
  };
  // console.log(content);
  return (
    <div className="flex justify-center w-full h-full min-h-screen">
      <div className="md:w-2/3 mx-auto p-4 flex flex-col gap-5">
        <div className="mt-1 text-xs text-red-500">
          {errors.map((error) => (
            <div key={error.for}>
              <span className="capitalize">*{error.for} : </span>
              <span>{error.message}</span>
            </div>
          ))}
        </div>

        <p>Available Tags</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag: any) => (
            <Pills
              key={tag.id}
              className={
                // @ts-ignore
                fields.tags.includes(tag.name)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }
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
          {progress > 0 && <p>Upload progress: {progress}%</p>}
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
        <div>
          <p>Set this blog featured</p>
          <div className="flex gap-10">
            <RadioInput
              checked={fields.isFeatured}
              type="radio"
              name="featured"
              label="Yes"
              onChange={() =>
                setFields((prevFields) => ({
                  ...prevFields,
                  isFeatured: true,
                }))
              }
            />
            <RadioInput
              checked={!fields.isFeatured}
              type="radio"
              name="featured"
              label="No"
              onChange={() =>
                setFields((prevFields) => ({
                  ...prevFields,
                  isFeatured: false,
                }))
              }
            />
          </div>
        </div>
        <div>
          <RichTextEditor
            value={content}
            onChange={(newContent: any) => {
              setContent(newContent.value);
            }}
          />
        </div>
        <div className="flex  gap-10 w-8/12 mx-auto">
          <div className="w-full" onClick={() => postData()}>
            <ButtonLayout className="">Submit</ButtonLayout>
          </div>
          <div className="w-full" onClick={() => handleDiscard()}>
            <ButtonLayout className="bg-red-600">Discard</ButtonLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

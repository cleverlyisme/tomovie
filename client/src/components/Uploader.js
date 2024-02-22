import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import toast from "react-hot-toast";

import Loader from "./Notifications/Loader";
import { uploadImage } from "../services/upload.service";

function Uploader({ setImageUrl }) {
  const [isLoading, setIsLoading] = useState(false);

  // upload file
  const onDrop = useCallback(
    async (acceptedFiles) => {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("file", acceptedFiles[0]);

        const response = await uploadImage(formData);

        setImageUrl(response.data);
        toast.success("Uploaded image successfully");
      } catch (err) {
        toast.error(err?.response?.data || err.message);
      }
      setIsLoading(false);
    },
    [setImageUrl]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
    });
  return (
    <div className="w-full text-center flex-colo gap-6">
      {isLoading ? (
        <div className="px-6 w-full py-8 border-2 border-border border-dashed bg-dry rounded-md">
          <Loader />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="px-6 w-full py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer"
        >
          <input {...getInputProps()} />
          <span className="mx-auto flex-colo text-subMain text-3xl">
            <FiUploadCloud />
          </span>
          <p className="text-sm mt-2">Drag your image here</p>
          <em className="text-xs text-border">
            {isDragActive
              ? "Drop it like it's hot!"
              : isDragReject
              ? "Unsupported file type..."
              : "only .jpg and .png files will be accepted"}
          </em>
        </div>
      )}
    </div>
  );
}

export default Uploader;

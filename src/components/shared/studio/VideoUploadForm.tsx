"use client"

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form"
import TextArea from "../TextArea"
import MediaUpload from "../MediaUpload"
import Image from "next/image"
import { FaRegSquare } from "react-icons/fa"

interface VideoUploadFormProps {
    register: UseFormRegister<FieldValues>
    errors: FieldErrors<FieldValues>
    changeValue: (id: string, value: string) => void
    thumbnailSrc: string
    isLoading: boolean
}

const VideoUploadForm: React.FC<VideoUploadFormProps> = ({
    register,
    errors,
    changeValue,
    thumbnailSrc,
    isLoading
}) => {
    return <div className="w-full md:w-3/5 flex flex-col gap-6">
        <TextArea
            register={register}
            id="title"
            label="Title (requierd)"
            errors={errors}
            disabled={isLoading}
            changeValue={changeValue}
            required
        />
        <TextArea
            register={register}
            id="description"
            label="Description (requierd)"
            errors={errors}
            disabled={isLoading}
            changeValue={changeValue}
            required
        />
        <div>
            <label className="block mb-2">Thumbnail</label>
            <MediaUpload onChange={(value) => !isLoading && changeValue("thumbnailSrc", value)}>
                {thumbnailSrc ? (<Image src={thumbnailSrc} alt="thumbnail" height="112" width="192"
                    className={`h-28 w-48 overflow-hidden rounded-md 
                ${!isLoading ? "cursor-pointer" : ""}`} />) : (<div
                    id="thumbnailSrc"
                    {...register("thumbnailSrc", { required: true })}
                    className={`h-28 w-48 bg-zinc-800 rounded-md flex items-center justify-center cursor-pointer border-[1px]
                    ${errors["thumbnailSrc"]}`}
                >
                    <FaRegSquare className="h-6 w-6" />
                </div>)}
            </MediaUpload>
        </div>
    </div>

}

export default VideoUploadForm
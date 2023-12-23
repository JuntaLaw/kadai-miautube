"use client"

import UploadVideoModal from "@/components/shared/Modal/UploadVideoModal"
import { UploadVideoModalContext } from "@/context/UploadVideoModalContext"
import { useContext, useEffect, useState } from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import Button from "@/components/shared/Button"
import { useRouter } from "next/navigation"
import VideoUploadForm from "@/components/shared/studio/VideoUploadForm"
import VideoPreview from "@/components/shared/studio/VideoPreview"


export default function UploadPage() {

    const uploadVideoModal = useContext(UploadVideoModalContext)

    useEffect(() => uploadVideoModal?.onOpen(), [uploadVideoModal]);

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)


    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue } = useForm<FieldValues>({
            defaultValues: {
                title: "",
                description: "",
                thumbnailSrc: "",
                videoSrc: ""
            }
        })

    const thumbnailSrc: string = watch("thumbnailSrc")
    const videoSrc: string = watch("videoSrc")

    const changeValue = (id: string, value: string) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    };

    const onSubmit = () => {

    }

    return (
        <>
            {/* <UploadVideoModal onUpload={(value) => changeValue("videoSrc", value)} /> */}
            <div className="flex flex-col px-8 pt-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl">Video Details</h1>
                    <span className="flex gap-4">
                        <Button type="secondary" onClick={() => router.back()}>Cancel
                        </Button>
                        <Button type="box" onClick={handleSubmit(onSubmit)}>Save
                        </Button>
                    </span>
                </div>
                <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-2">
                    <VideoUploadForm
                        register={register}
                        errors={errors}
                        changeValue={changeValue}
                        thumbnailSrc={thumbnailSrc}
                        isLoading={isLoading}
                    />
                    <VideoPreview />
                </div>
            </div>

        </>
    )
}
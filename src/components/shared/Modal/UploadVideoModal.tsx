"use client"

import { UploadVideoModalContext } from "@/context/UploadVideoModalContext"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { MdClose, MdUpload } from "react-icons/md"
import IconButton from "../IconButton"
import MediaUpload from "../MediaUpload"
import Button from "../Button"

interface UploadVideoModalProps {
    onUpload: (value: string) => void;
}

const UploadVideoModal: React.FC<UploadVideoModalProps> = ({ onUpload }) => {
    const router = useRouter()

    const uploadVideoModal = useContext(UploadVideoModalContext)

    const handleUpload = (value: string) => {
        onUpload(value)
        uploadVideoModal?.onClose()
    }

    return (
        <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start bg-zinc-800 w-5/6 h-5/6 rounded-xl z-50">
            <div className="p-3 border-b border-neutral-600 flex justify-between">
                <h1 className="text-xl">Upload Video</h1>
                <MdClose className="h-6 w-6 cursor-pointer"
                    onCick={() => {
                        uploadVideoModal?.onClose()
                        router.back()
                    }} />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center h-full">
                <MediaUpload onChange={() => { }}>
                    <IconButton className="bg-stone-900">
                        <MdUpload className="h-20 w-20 m-8 text-pink-200" />
                    </IconButton>
                </MediaUpload>
                <div className="flex flex-col items-center">
                    <p>Select files to upload</p>
                    <p className="text-pink-200 text-sm">Your video will be private untill you publish them</p>
                </div>
                <MediaUpload onChange={handleUpload}>
                    <Button type="box">Select Files</Button>
                </MediaUpload>
            </div>
        </div>
    )
}

export default UploadVideoModal
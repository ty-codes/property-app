import { useState } from 'react';
import Dropzone from 'react-dropzone';
import {CloseIcon} from "../../assets/svg";
import "./ListStockImages.css";

export default function ListStockImages() {
    interface iImage {
        path?: string;
        lastModified?: number;
        lastModifiedDate?: Date,
        name?: string,
        size?: number,
        type?: string,
        webkitRelativePath?: string,
    };

    const [images, setImages] = useState<any>([]);
    const [error, setError] = useState<string>("");

    function addFiles(files: any) {

        files.map((file: any) => {
            const validFormat = ["image/png", "image/jpeg", "image/jpg"];
            const isFormatValid = validFormat.includes(file.type);
            const isSizeValid = file.size <= 512000;
            
            if (isFormatValid && isSizeValid && images?.length < 5) {
                setError("");
                setImages((prevState: []) => [...prevState, file]);
            } else if (!isSizeValid) {
                setError("Max file size is 500kb");
            } else if(!isFormatValid) {
                setError("Invalid file format");
            } else if (images?.length >= 4) {
                setError("Max file number is 4");
            } else {
                setError("Invalid file format");
            }
        })
    }

    // images && console.log(images);

    return (
        <div id="stock-dropzone">
            <Dropzone onDrop={files => addFiles(files)}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <h3>Upload files</h3>
                        <span>Max file size is 500kb. Supported file types are .jpg and .png</span>
                        <div className="dropzone" {...getRootProps()}>
                            <input {...getInputProps()} />
                            <span>Drag and drop files here, or click to upload</span>
                        </div>
                        {error && <p className='error-msg'>{error}</p>}
                    </section>
                )}
            </Dropzone>
            {images && (
                <div className="stock_images">
                    {
                        images?.map((image: any, key: number) => {
                            var imageUrl;
                            const reader = new FileReader();
                            reader.readAsDataURL(image);
                            reader.onload = function (e) {
                                imageUrl = e.target?.result;
                                var element = document.getElementById(`prod-${key}`)
                                if (element) {
                                    element.style.backgroundImage = `url(${imageUrl})`;
                                    element.classList.add("product_image");
                                }

                            };
                            return (
                                <div key={key} id={`prod-${key}`} >
                                    <CloseIcon onClick={() => {images.splice(key, 1); setImages(images)}}/>
                                </div>
                            )
                        })
                    }
                </div>
            )}

        </div>
    )
}
export default function UploadImage ({ setStep }:
    {
        setStep: React.Dispatch<React.SetStateAction<number>>
    }) {
    return (
        <div className="id-page">
            <div>
                <div className="id-step">
                    <button onClick={() => setStep(4)} style={{ alignSelf: "center" }} className='btn filled_btn'>On To The Next</button>

                </div>

            </div>

        </div>
    )
}
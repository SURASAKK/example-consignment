import React from "react";
import "../css/ImageUpload.css"

type State = {
    file: any
    imagePreviewUrl: string
}

export default class ImageUpload extends React.Component<any, State> {
    constructor(props) {
        super(props);
        this.state = { file: null, imagePreviewUrl: "" };
    }
    private _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log("handle uploading-", this.state.file);
    }
    private _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file,
                imagePreviewUrl: reader.result.toString()
            });
            console.log(reader.result.toString());
        }

        reader.readAsDataURL(file)
    }

    public render() {
        let $imagePreview = null;
        if (this.state.imagePreviewUrl) {
            $imagePreview = (<img src={this.state.imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent" >
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <input className="fileInput"
                        type="file"
                        onChange={(e) => this._handleImageChange(e)} />
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        )
    }
}
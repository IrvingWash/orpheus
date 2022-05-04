import React, { useRef } from 'react';

import styles from './file-upload.module.css';

interface FileUploadProps {
	setFile: (file: File) => void;
	accept: string;
	children: React.ReactNode;
}

export function FileUpload(props: FileUploadProps): JSX.Element {
 const fileInputRef = useRef<HTMLInputElement>(null);

	return (
		<div onClick={ handleFileInputClick }>
			<input
				type='file'
				accept={ props.accept }
				className={ styles['file-input'] }
				ref={ fileInputRef }
				onChange={ handleFileInputChange }
			/>
			{ props.children }
		</div>
	);

	function handleFileInputClick(): void {
		if (fileInputRef.current !== null) {
			fileInputRef.current.click();
		}
	}

	function handleFileInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
		if (event.target.files !== null) {
			props.setFile(event.target.files[0]);
		}
	}
}

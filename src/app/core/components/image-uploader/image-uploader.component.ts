import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  imports: [],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss'
})
export class ImageUploaderComponent {
  @Output() filesSelected = new EventEmitter<FormData>();

  onFilesSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (!files?.length) return;

    const formData = new FormData();
    Array.from(files).forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    this.filesSelected.emit(formData);
  }
}

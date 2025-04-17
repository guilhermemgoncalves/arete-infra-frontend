import {Component} from '@angular/core';
import {UploadService} from '../../services/upload/upload.service';

@Component({
  selector: 'app-image-uploader',
  imports: [],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss'
})
export class ImageUploaderComponent {

  constructor(private uploadService: UploadService) {
  }

  onFilesSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (!files?.length) return;

    const formData = new FormData();
    Array.from(files).forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    console.log(formData);
    this.uploadService.uploadImages(formData).subscribe();

  }
}

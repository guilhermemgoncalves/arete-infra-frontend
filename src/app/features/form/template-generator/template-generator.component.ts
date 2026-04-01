import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {Question} from '../interfaces/question-model';

@Component({
  standalone: true,
  selector: 'app-template-generator',
  imports: [
    FormsModule,
    NgIf,
    NgSwitch,
    NgForOf,
    NgSwitchCase
  ],
  templateUrl: './template-generator.component.html',
  styleUrl: './template-generator.component.scss'
})
export class TemplateGeneratorComponent {
  questions: Question[] = [];
  nextId = 1;

  newQuestion: Partial<Question> = {
    label: '',
    type: 'text',
    options: [],
    required: false,
  };

  addQuestion() {
    if (!this.newQuestion.label || !this.newQuestion.type) return;

    this.questions.push({
      id: this.nextId++,
      label: this.newQuestion.label!,
      type: this.newQuestion.type!,
      options: this.newQuestion.options || [],
      required: this.newQuestion.required || false,
    });

    this.newQuestion = { label: '', type: 'text', options: [], required: false };
    console.log(this.questions);
  }

  showOptionsInput(): boolean {
    return ['select', 'checkbox', 'radio'].includes(this.newQuestion.type || '');
  }

  updateOptions(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.newQuestion.options = input.value.split(',').map(opt => opt.trim());
  }
}

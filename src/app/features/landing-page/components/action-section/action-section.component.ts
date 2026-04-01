import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pillar {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-action-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="atuacao" class="action-section">
      <div class="lp-container grid-layout">
        <div class="text-content">
          <h2 class="section-subtitle animate-fade">O VALOR DA EXCELÊNCIA</h2>
          <h2 class="section-title left animate-fade">ATUAÇÃO</h2>
          
          <div class="accordion">
            @for (pillar of pillars; track pillar.id) {
              <div class="accordion-item" 
                   [class.active]="selectedPillar() === pillar.id"
                   (click)="togglePillar(pillar.id)">
                <div class="accordion-header">
                  <span class="number">0{{ pillar.id + 1 }}</span>
                  <h3 class="pillar-title">{{ pillar.title }}</h3>
                  <div class="icon" [class.rotated]="selectedPillar() === pillar.id">+</div>
                </div>
                <div class="accordion-content">
                  <div class="content-inner">
                    <p>{{ pillar.description }}</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="image-content">
          <div class="image-wrapper v-left animate-fade">
            <img src="/assets/images/photos/people/people1.png" alt="Eng. Leandro Silva" />
            <div class="card-footer">
              <span class="name">Eng. Leandro Silva</span>
              <span class="role">Especialista em Saneamento</span>
            </div>
          </div>
          <div class="image-wrapper v-right animate-fade">
            <img src="/assets/images/photos/people/people2.png" alt="Engenheiro Pedro Lopes" />
            <div class="card-footer">
              <span class="name">Engenheiro Pedro Lopes</span>
              <span class="role">Coordenadora de Projetos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .action-section {
      padding: 160px 0;
      background-color: var(--color-gray-dark);
      color: var(--color-light);
      overflow: hidden;
    }

    .grid-layout {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      align-items: center;
      gap: 8rem;
    }

    .text-content {
      max-width: 600px;
    }

    /* Accordion Styles */
    .accordion {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .accordion-item {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding: 1.5rem 0;
      cursor: pointer;
      transition: all 0.4s ease;
    }

    .accordion-header {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .number {
      font-size: 0.7rem;
      font-weight: 800;
      color: var(--color-primary-light);
      opacity: 0.5;
    }

    .pillar-title {
      flex: 1;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      transition: color 0.3s ease;
    }

    .accordion-item:hover .pillar-title,
    .accordion-item.active .pillar-title {
      color: var(--color-primary-light);
    }

    .icon {
      font-size: 1.5rem;
      font-weight: 300;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      color: rgba(255, 255, 255, 0.2);
    }

    .icon.rotated {
      transform: rotate(45deg);
      color: var(--color-primary-light);
    }

    .accordion-content {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      overflow: hidden;
    }

    .accordion-item.active .accordion-content {
      grid-template-rows: 1fr;
    }

    .content-inner {
      min-height: 0;
    }

    .accordion-content p {
      padding-top: 1.5rem;
      padding-left: 3.5rem;
      font-size: 0.95rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.6);
      max-width: 90%;
    }

    /* Asymmetric Image Layout */
    .image-content {
      display: flex;
      gap: 2rem;
      height: 600px;
      align-items: flex-start;
    }

    .image-wrapper {
      flex: 1;
      position: relative;
      height: 450px; /* Base height for both */
      border-radius: 2px;
      overflow: hidden;
      box-shadow: 0 40px 80px rgba(0,0,0,0.5);
    }

    .v-left {
      align-self: flex-end; /* Asymmetric Offset */
    }

    .v-right {
      align-self: flex-start; /* Asymmetric Offset */
    }

    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .image-wrapper:hover img {
      transform: scale(1.1);
    }

    .card-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: linear-gradient(transparent, rgba(0,0,0,0.9));
      padding: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      backdrop-filter: blur(5px);
    }

    .card-footer .name {
      font-size: 0.9rem;
      font-weight: 800;
      letter-spacing: 0.05em;
    }

    .card-footer .role {
      font-size: 0.65rem;
      font-weight: 700;
      color: var(--color-primary-light);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    @media (max-width: 1200px) {
      .grid-layout { grid-template-columns: 1fr; gap: 4rem; }
      .image-content { height: auto; justify-content: center; }
      .image-wrapper { height: 400px; max-width: 300px; }
    }
  `]
})
export class ActionSectionComponent {
  selectedPillar = signal<number | null>(0);

  pillars: Pillar[] = [
    {
      id: 0,
      title: 'Dimensionamento de redes de esgoto',
      description: 'Cálculo fundamentado na Equação de Manning e critérios de Tensão Trativa (NBR 9649), garantindo autolimpeza e eficiência hidráulica absoluta.'
    },
    {
      id: 1,
      title: 'Projetos conceituais e executivos',
      description: 'Modelagem hidráulica avançada integrando dimensionamento em condutos forçados (Hazen-Williams) e gravidade, do layout preliminar ao As-Built.'
    },
    {
      id: 2,
      title: 'Validação nas principais concessionárias',
      description: 'Expertise técnica para aprovação acelerada junto à Sanasa, Embasa, BRK, Sabesp e SAAE através de conformidade normativa rigorosa.'
    },
    {
      id: 3,
      title: 'Consultoria em serviços de infraestrutura',
      description: 'Diagnósticos de redes existentes, estudos de impacto de vizinhança e análises de viabilidade técnica para novos empreendimentos urbanos.'
    },
    {
      id: 4,
      title: 'Projetos de estação elevatória',
      description: 'Dimensionamento de EEE/ETA com análise aprofundada de transientes hidráulicos (golpe de aríete) para máxima vida útil dos equipamentos.'
    }
  ];

  togglePillar(id: number) {
    this.selectedPillar.set(this.selectedPillar() === id ? null : id);
  }
}
